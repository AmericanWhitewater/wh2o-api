import { Gage, PrismaClient } from "@prisma/client"

export interface GageServiceInterface {
  deleteGage: (id: number) => Promise<Gage>
  createGage: (gage: Gage) => Promise<Gage>
  getGage: (id: number) => Promise<Gage>
  getGagesByReach: (id: number) => Promise<Gage[]>
  getGagesByState: (state: string) => Promise<Gage[]>
  updateGage: (id: number, gage: Gage) => Promise<Gage>
}

export class GageService implements GageServiceInterface {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  createGage = async (gage: Gage): Promise<Gage> => {
    return this.prisma.gage
      .create({
        data: gage,
      })
      .then((res) => {
        return res
      })
  }

  getGage = async (id: number): Promise<Gage> => {
    return this.prisma.gage
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Gage ${id} not found`)
        }
        return res
      })
  }

  updateGage = async (id: number, gage: Gage): Promise<Gage> => {
    return this.prisma.gage
      .update({
        where: {
          id: id,
        },
        data: gage,
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Gage ${id} not found`)
        }
        return res
      })
  }

  deleteGage = async (id: number): Promise<Gage> => {
    return this.prisma.gage
      .delete({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Gage ${id} not found`)
        }
        return res
      })
  }

  getGagesByState = async (state: string): Promise<Gage[]> => {
    return this.prisma.gage.findMany({
      where: {
        state: state,
      },
    })
  }

  getGagesByReach = async (id: number): Promise<Gage[]> => {
    return this.prisma.gage.findMany({
      where: {
        reachId: id,
      },
    })
  }
}
