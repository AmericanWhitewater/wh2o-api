import { PrismaClient, User } from "@prisma/client"

export interface UserServiceInterface {
  deleteUser: (id: number) => Promise<User>
  getUser: (id: number) => Promise<User>
  getUsers: () => Promise<User[]>
  updateUser: (id: number, user: User) => Promise<User>
}

export class UserService implements UserServiceInterface {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  getUser = async (id: number): Promise<User> => {
    return this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`User ${id} not found`)
        }
        return res
      })
  }

  updateUser = async (id: number, user: User): Promise<User> => {
    return this.prisma.user
      .update({
        where: {
          id: id,
        },
        data: user,
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`User ${id} not found`)
        }
        return res
      })
  }

  deleteUser = async (id: number): Promise<User> => {
    return this.prisma.user
      .delete({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`User ${id} not found`)
        }
        return res
      })
  }

  getUsers = async (): Promise<User[]> => {
    return this.prisma.user.findMany()
  }
}
