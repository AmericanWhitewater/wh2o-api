import testUtils from "../../testUtils"
import {
  mockReaches,
  mockReachesExt,
} from "../../service/reach/__mocks__/mockReaches"
import {
  mockExtendedFeatures,
  mockFeatures,
} from "../../service/feature/__mocks__/mockFeatures"
import { mockGages } from "../../service/gage/__mocks__/mockGages"
import { ReachService } from "../../service/reach/reach.service"

const getReachSpy = jest.spyOn(ReachService.prototype, "getReach")
const getFeaturesSpy = jest.spyOn(ReachService.prototype, "getFeatures")
const getGagesSpy = jest.spyOn(ReachService.prototype, "getGages")
const deleteReachSpy = jest.spyOn(ReachService.prototype, "deleteReach")
const updateReachSpy = jest.spyOn(ReachService.prototype, "updateReach")
const mockGetReachesByState = jest.spyOn(
  ReachService.prototype,
  "getReachesByState"
)

describe("Reach", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {
    testUtils.stopServer()
  })
  it("should return status 200 and reach data", async () => {
    getReachSpy.mockResolvedValueOnce(mockReachesExt[0])
    const response = await testUtils.request().get("/reach/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
  it("should return status 200 and reach features", async () => {
    getFeaturesSpy.mockResolvedValueOnce(mockExtendedFeatures)
    const response = await testUtils.request().get("/reach/1/feature")
    expect(response.status).toBe(200)
  })
  it("should return status 200 and reach gages", async () => {
    getGagesSpy.mockResolvedValueOnce(mockGages)
    const response = await testUtils.request().get("/reach/1/gage")
    expect(response.status).toBe(200)
  })
  it("should return status 200 and reach by state", async () => {
    mockGetReachesByState.mockResolvedValueOnce(mockReachesExt)
    const response = await testUtils.request().get("/reach/state/CO")
    expect(response.status).toBe(200)
  })
  it("should return status 200 when a reach is deleted", async () => {
    deleteReachSpy.mockResolvedValueOnce(mockReaches[0])
    const response = await testUtils.request().delete("/reach/10")
    expect(response.status).toBe(200)
  })
  it("should return status 500 when a reach update fails", async () => {
    updateReachSpy.mockRejectedValueOnce("err")
    const response = await testUtils
      .request()
      .put("/reach/1")
      .send({ ...mockReaches[0], name: "new name" })
    expect(response.status).toBe(500)
  })
})
