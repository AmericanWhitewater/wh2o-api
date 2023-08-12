import testUtils from "../../testUtils"
import { PostService } from "../../service/post/post.service"
import { mockPosts } from "../../service/post/__mocks__/mockPosts"

const getPostSpy = jest.spyOn(PostService.prototype, "getPost")

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
})
