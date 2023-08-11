import { Post, PrismaClient } from "@prisma/client"

export interface PostServiceInterface {
  deletePost: (id: number) => Promise<Post>
  getPost: (id: number) => Promise<Post>
  createPost: (post: Post) => Promise<Post>
  getPostsByReach: (id: number) => Promise<Post[]>
  updatePost: (id: number, post: Post) => Promise<Post>
}

export class PostService implements PostServiceInterface {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  createPost = async (post: Post): Promise<Post> => {
    return this.prisma.post
      .create({
        data: post,
      })
      .then((res) => {
        return res
      })
  }

  getPost = async (id: number): Promise<Post> => {
    return this.prisma.post
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Post ${id} not found`)
        }
        return res
      })
  }

  updatePost = async (id: number, post: Post): Promise<Post> => {
    return this.prisma.post
      .update({
        where: {
          id: id,
        },
        data: post,
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Post ${id} not found`)
        }
        return res
      })
  }

  deletePost = async (id: number): Promise<Post> => {
    return this.prisma.post
      .delete({
        where: {
          id: id,
        },
      })
      .then((res) => {
        if (res === null) {
          throw new Error(`Post ${id} not found`)
        }
        return res
      })
  }

  getPostsByReach = async (id: number): Promise<Post[]> => {
    return this.prisma.post.findMany({
      where: {
        reach: {
          id: id,
        },
      },
    })
  }
}
