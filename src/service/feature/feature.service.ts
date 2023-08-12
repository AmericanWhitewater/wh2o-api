import { Feature, Prisma, PrismaClient } from "@prisma/client"

import { FeatureExtended, Point } from "../../types"

export interface FeatureServiceInterface {
  createFeature: (feature: Feature) => Promise<Feature>
  deleteFeature: (id: number) => Promise<Feature>
  getFeature: (id: number) => Promise<Feature>
  updateFeature: (id: number, feature: Feature) => Promise<Feature>
  getLocation: (id: number) => Promise<number[]>
}

export class FeatureService implements FeatureServiceInterface {
  private prisma: PrismaClient
  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async getLocation(id: number): Promise<number[]> {
    const result = await this.prisma.$queryRaw<{ location: Point }[]>(
      Prisma.sql`SELECT location::json FROM "public"."Feature" WHERE id = ${id}`
    )

    if (result === null || !result || result.length === 0) {
      return []
    }

    return result[0].location.coordinates
  }

  async getFeature(id: number): Promise<FeatureExtended> {
    const location = await this.getLocation(id)

    const feature = await this.prisma.feature
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Feature ${id} not found`)
        }
        return res
      })

    return {
      ...feature,
      location,
    }
  }

  async updateFeature(id: number, feature: Feature): Promise<Feature> {
    return this.prisma.feature
      .update({
        where: {
          id: id,
        },
        data: feature,
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Feature ${id} not found`)
        }
        return res
      })
  }

  async deleteFeature(id: number): Promise<Feature> {
    return this.prisma.feature
      .delete({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Feature ${id} not found`)
        }
        return res
      })
  }

  async createFeature(feature: Feature): Promise<Feature> {
    return this.prisma.feature.create({
      data: feature,
    })
  }
}
