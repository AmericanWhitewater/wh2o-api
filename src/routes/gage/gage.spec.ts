import testUtils from "../../testUtils"
import { GageService } from "../../service/gage/gage.service"
import { mockGages } from "../../service/gage/__mocks__/mockGages"

const getGageSpy = jest.spyOn(GageService.prototype, "getGage")

describe("Gage", () => {
  beforeAll(async () => {
    await testUtils.startServer()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {
    testUtils.stopServer()
  })
  it("should return status 200 and gage data", async () => {
    getGageSpy.mockResolvedValueOnce(mockGages[0])

    const response = await testUtils.request().get("/gage/1")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
})
