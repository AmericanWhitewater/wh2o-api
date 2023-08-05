import { Feature, PrismaClient } from "@prisma/client"

export interface FeatureServiceInterface {
  createFeature: (feature: Feature) => Promise<Feature>
  deleteFeature: (id: number) => Promise<Feature>
  getFeature: (id: number) => Promise<Feature>
  updateFeature: (id: number, feature: Feature) => Promise<Feature>
}

export class FeatureService implements FeatureServiceInterface {
  private prisma: PrismaClient
  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  getFeature = async (id: number): Promise<Feature> => {
    return this.prisma.feature
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
  }

  updateFeature = async (id: number, feature: Feature): Promise<Feature> => {
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

  deleteFeature = async (id: number): Promise<Feature> => {
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

  createFeature = async (feature: Feature): Promise<Feature> => {
    return this.prisma.feature.create({
      data: feature,
    })
  }
}
