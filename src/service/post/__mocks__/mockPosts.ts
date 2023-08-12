import { Post } from "@prisma/client"

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "post 1",
    content: "content 1",
    authorId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: true,
    reachId: 1,
  },
]
