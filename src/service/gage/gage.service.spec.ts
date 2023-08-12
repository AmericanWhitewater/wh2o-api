import { GageService } from "./gage.service"
import { prismaMock } from "../../plugins/database/singleton"
import { mockGages } from "./__mocks__/mockGages"

const gageService = new GageService(prismaMock)

describe("GageService", () => {
  it("should return a gage", async () => {
    prismaMock.gage.findUnique.mockResolvedValueOnce(mockGages[0])

    const gage = await gageService.getGage(1)

    expect(gage).toEqual(mockGages[0])
  })
})
