import { Feature, Gage, Prisma, PrismaClient, Reach } from "@prisma/client"

import http from "../../http"
import {
  FeatureExtended,
  Geometry,
  ReachExtended,
  ReachLegacy,
} from "../../types"
import { FeatureService } from "../feature/feature.service"
import { geoParser } from "../../lib/geoParser"

export interface ReachServiceInterface {
  deleteReach: (id: number) => Promise<Reach>
  getFeatures: (id: number) => Promise<Feature[]>
  getGages: (id: number) => Promise<Gage[]>
  getReach: (id: number) => Promise<ReachExtended>
  getReachesByState: (state: string) => Promise<Reach[]>
  updateReach: (id: number, reach: Reach) => Promise<Reach>
  getGeometry: (id: number) => Promise<number[][]>
}

export class ReachService implements ReachServiceInterface {
  private readonly prisma: PrismaClient
  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  private formatGeometry(geom: Geometry): number[][] {
    let val: number[][] = []

    switch (geom.type) {
      case "Polygon":
        val = geom.coordinates[0]
        break
      case "LineString":
        val = geom.coordinates
        break
      case "Point":
        val = [geom.coordinates]
    }

    return val
  }

  async getGeometry(id: number): Promise<number[][]> {
    const result = await this.prisma.$queryRaw<{ geom: Geometry }[]>(
      Prisma.sql`SELECT geom::json FROM "public"."Reach" WHERE id = ${id}`
    )

    if (result === null || result.length === 0) {
      return []
    }

    return this.formatGeometry(result[0].geom)
  }

  async getReach(id: number): Promise<ReachExtended> {
    const geom = await this.getGeometry(id)
    const features = await this.getFeatures(id)

    const reach = await this.prisma.reach
      .findUnique({
        where: {
          id: id,
        },
        include: {
          gages: true,
          // features: true,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Reach ${id} not found`)
        }
        return res
      })

    return {
      ...reach,
      geom,
      features,
    }
  }

  async updateReach(id: number, reach: Reach): Promise<Reach> {
    return this.prisma.reach
      .update({
        where: {
          id: id,
        },
        data: reach,
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Reach ${id} not found`)
        }
        return res
      })
  }

  async deleteReach(id: number): Promise<Reach> {
    return this.prisma.reach
      .delete({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Reach ${id} not found`)
        }
        return res
      })
  }

  async getReachesByState(state: string): Promise<ReachExtended[]> {
    const response: { data: ReachLegacy[] } = await http.get(
      `/content/River/search/.json?state=st${state}`
    )

    const getGeom = (reach: ReachLegacy) => {
      if (!reach.geom) return []
      return this.formatGeometry(geoParser.postgisToGeoJSON(reach.geom))
    }

    return response.data.map((reach: ReachLegacy) => ({
      ...reach,
      geom: getGeom(reach),
      features: [],
    }))
  }

  async getFeatures(id: number): Promise<FeatureExtended[]> {
    const featureService = new FeatureService(this.prisma)

    const features = await this.prisma.feature.findMany({
      where: {
        reachId: id,
      },
    })

    if (features.length === 0) return []

    const featuresWithLocation = await Promise.all(
      features.map(async (feature) => {
        const location = await featureService.getLocation(feature.id)
        return {
          ...feature,
          location,
        }
      })
    )

    return featuresWithLocation.sort((a, b) => {
      if (a.distance === null && b.distance !== null) return 1 // a should appear after b
      if (a.distance !== null && b.distance === null) return -1 // a should appear before b
      if (a.distance === null && b.distance === null) return 0 // both a and b are null, so no sorting required

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return a.distance! - b.distance!
    })
  }

  async getGages(id: number): Promise<Gage[]> {
    return this.prisma.gage
      .findMany({
        where: {
          reachId: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Gages for Reach ${id} not found`)
        }
        return res
      })
  }
}
