import { Post } from "@prisma/client"

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
  it("should throw an error if creating a post fails", async () => {
    let error = false
    try {
      prismaMock.post.create.mockRejectedValueOnce(null)
      await postService.createPost(mockPosts[0])
    } catch (e) {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if a post is not found", async () => {
    let error = false
    try {
      prismaMock.post.findUnique.mockResolvedValueOnce(null)
      await postService.getPost(1)
    } catch (e) {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if updating a post fails", async () => {
    let error = false
    try {
      prismaMock.post.update.mockResolvedValueOnce(null as unknown as Post)
      await postService.updatePost(1, mockPosts[0])
    } catch (e) {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if deleting a post fails", async () => {
    let error = false
    try {
      prismaMock.post.delete.mockResolvedValueOnce(null as unknown as Post)
      await postService.deletePost(1)
    } catch (e) {
      error = true
    }
    expect(error).toEqual(true)
  })
})
