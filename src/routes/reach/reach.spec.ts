import testUtils from "../../testUtils"
import http from "../../http"

const getSpy = jest.spyOn(http, "get")

describe("Reach", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(async () => {
    await testUtils.stopServer()
  })
  it("should return status 200 and reach data", async () => {
    const response = await testUtils.request().get("/reach/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 200 and reach features", async () => {
    const response = await testUtils.request().get("/reach/1/feature")
    expect(response.status).toBe(200)
  })
  it("should return status 200 and reach gages", async () => {
    const response = await testUtils.request().get("/reach/1/gage")
    expect(response.status).toBe(200)
  })
  it("should return status 200 and reach by state", async () => {
    const response = await testUtils.request().get("/reach/state/CO")
    expect(response.status).toBe(200)
    expect(response.body).toMatchSnapshot()
    expect(getSpy).toHaveBeenCalledWith(
      "/content/River/search/.json?state=stCO"
    )
  })
})
