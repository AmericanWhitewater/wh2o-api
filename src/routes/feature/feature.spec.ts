import testUtils from "../../testUtils"
import { FeatureService } from "../../service/feature/feature.service"
import { mockExtendedFeatures } from "../../service/feature/__mocks__/mockFeatures"

const getFeatureSpy = jest.spyOn(FeatureService.prototype, "getFeature")

describe("Feature", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {
    testUtils.stopServer()
  })
  it("should return status 200 and feature data", async () => {
    getFeatureSpy.mockResolvedValueOnce(mockExtendedFeatures[0])
    const response = await testUtils.request().get("/feature/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
})
