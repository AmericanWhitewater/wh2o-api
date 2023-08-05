import testUtils from "../../testUtils"

describe("Feature", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(async () => {
    await testUtils.stopServer()
  })
  it("should return status 200 and feature data", async () => {
    const response = await testUtils.request().get("/feature/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
})
