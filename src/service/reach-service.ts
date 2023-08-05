import { Reach, Feature, Gage, PrismaClient } from "@prisma/client"

import http from "../http"

export interface ReachServiceInterface {
  deleteReach: (id: number) => Promise<Reach>
  getFeatures: (id: number) => Promise<Feature[]>
  getGages: (id: number) => Promise<Gage[]>
  getReach: (id: number) => Promise<Reach>
  getReachesByState: (state: string) => Promise<Reach[]>
  updateReach: (id: number, reach: Reach) => Promise<Reach>
}

export class ReachService implements ReachServiceInterface {
  private prisma: PrismaClient
  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  getReach = async (id: number): Promise<Reach> => {
    return this.prisma.reach
      .findUnique({
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

  updateReach = async (id: number, reach: Reach): Promise<Reach> => {
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

  deleteReach = async (id: number): Promise<Reach> => {
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
        console.log(res)
        return res
      })
  }

  getReachesByState = async (state: string): Promise<Reach[]> => {
    const response = await http.get(
      `/content/River/search/.json?state=st${state}`
    )

    return response.data
  }

  getFeatures = async (id: number): Promise<Feature[]> => {
    return this.prisma.feature.findMany({
      where: {
        reachId: id,
      },
    })
  }

  getGages = async (id: number): Promise<Gage[]> => {
    return this.prisma.gage.findMany({
      where: {
        reachId: id,
      },
    })
  }
}
