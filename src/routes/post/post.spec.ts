import testUtils from "../../testUtils"
import { PostService } from "../../service/post/post.service"
import { mockPosts } from "../../service/post/__mocks__/mockPosts"

const getPostSpy = jest.spyOn(PostService.prototype, "getPost")
const updatePostSpy = jest.spyOn(PostService.prototype, "updatePost")
const createPostSpy = jest.spyOn(PostService.prototype, "createPost")
const deletePostSpy = jest.spyOn(PostService.prototype, "deletePost")

describe("Post", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {
    testUtils.stopServer()
  })
  it("should return status 200 and post data", async () => {
    getPostSpy.mockResolvedValueOnce(mockPosts[0])
    const response = await testUtils.request().get("/post/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 404 if post is not found", async () => {
    getPostSpy.mockRejectedValueOnce(new Error("Post 1 not found"))
    const response = await testUtils.request().get("/post/12")
    expect(response.status).toBe(404)
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Post 12 not found",
      })
    )
  })
  it("should return status 200 and updated post data", async () => {
    updatePostSpy.mockResolvedValueOnce(mockPosts[0])
    const response = await testUtils.request().put("/post/1").send(mockPosts[0])
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 200 and deleted post data", async () => {
    deletePostSpy.mockResolvedValueOnce(mockPosts[0])
    const response = await testUtils.request().delete("/post/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 200 and created post data", async () => {
    createPostSpy.mockResolvedValueOnce(mockPosts[0])
    const response = await testUtils.request().post("/post").send(mockPosts[0])
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 500 if post creation fails", async () => {
    createPostSpy.mockRejectedValueOnce(new Error("Post creation failed"))
    const response = await testUtils.request().post("/post").send(mockPosts[0])
    expect(response.status).toBe(500)
  })
  it("should return status 500 if post update fails", async () => {
    updatePostSpy.mockRejectedValueOnce(new Error("Post update failed"))
    const response = await testUtils.request().put("/post/1").send(mockPosts[0])
    expect(response.status).toBe(500)
  })
})
