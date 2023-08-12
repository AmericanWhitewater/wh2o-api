import { FeatureService } from "./feature.service"
import { prismaMock } from "../../plugins/database/singleton"
import { mockExtendedFeatures, mockFeatures } from "./__mocks__/mockFeatures"

const featureService = new FeatureService(prismaMock)

describe("FeatureService", () => {
  it("should return a feature", async () => {
    prismaMock.feature.findUnique.mockResolvedValueOnce(mockFeatures[0])
    const feature = await featureService.getFeature(1)
    expect(feature).toEqual(mockExtendedFeatures[0])
  })
})
