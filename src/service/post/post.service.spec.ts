import { PostService } from "./post.service"
import { prismaMock } from "../../plugins/database/singleton"
import { mockPosts } from "./__mocks__/mockPosts"

const postService = new PostService(prismaMock)

describe("PostService", () => {
  it("should create a post", async () => {
    prismaMock.post.create.mockResolvedValueOnce(mockPosts[0])
    const result = await postService.createPost(mockPosts[0])
    expect(result).toEqual(mockPosts[0])
  })
  it("should return a post", async () => {
    prismaMock.post.findUnique.mockResolvedValueOnce(mockPosts[0])
    const result = await postService.getPost(1)
    expect(result).toEqual(mockPosts[0])
  })
  it("should update a post", async () => {
    prismaMock.post.update.mockResolvedValueOnce(mockPosts[0])
    const result = await postService.updatePost(1, mockPosts[0])
    expect(result).toEqual(mockPosts[0])
  })
  it("should delete a post", async () => {
    prismaMock.post.delete.mockResolvedValueOnce(mockPosts[0])
    const result = await postService.deletePost(1)
    expect(result).toEqual(mockPosts[0])
  })
  it("should return posts by reach", async () => {
    prismaMock.post.findMany.mockResolvedValueOnce(mockPosts)
    const result = await postService.getPostsByReach(1)
    expect(result).toEqual(mockPosts)
  })
})
