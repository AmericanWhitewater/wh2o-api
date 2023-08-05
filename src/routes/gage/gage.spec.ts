import testUtils from "../../testUtils"

describe("Gage", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(async () => {
    await testUtils.stopServer()
  })
  it("should return status 200 and gage data", async () => {
    const response = await testUtils.request().get("/gage/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
})
