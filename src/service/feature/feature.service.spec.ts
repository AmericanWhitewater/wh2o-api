import { Feature } from "@prisma/client"

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
  it("should throw an error if a feature is not found", async () => {
    let error = false
    try {
      prismaMock.feature.findUnique.mockResolvedValueOnce(null)
      await featureService.getFeature(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should update a feature", async () => {
    prismaMock.feature.update.mockResolvedValueOnce(mockFeatures[0])
    const result = await featureService.updateFeature(1, mockFeatures[0])
    expect(result).toEqual(mockFeatures[0])
  })
  it("should delete a feature", async () => {
    prismaMock.feature.delete.mockResolvedValueOnce(mockFeatures[0])
    const result = await featureService.deleteFeature(1)
    expect(result).toEqual(mockFeatures[0])
  })
  it("should create a feature", async () => {
    prismaMock.feature.create.mockResolvedValueOnce(mockFeatures[0])
    const result = await featureService.createFeature(mockFeatures[0])
    expect(result).toEqual(mockFeatures[0])
  })
  it("should throw an error if updating a feature fails", async () => {
    let error = false
    try {
      prismaMock.feature.update.mockResolvedValueOnce(
        null as unknown as Feature
      )
      await featureService.updateFeature(1, mockFeatures[0])
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if deleting a feature fails", async () => {
    let error = false
    try {
      prismaMock.feature.delete.mockResolvedValueOnce(
        null as unknown as Feature
      )
      await featureService.deleteFeature(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if creating a feature fails", async () => {
    let error = false
    try {
      prismaMock.feature.create.mockResolvedValueOnce(
        null as unknown as Feature
      )
      await featureService.createFeature(mockFeatures[0])
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if no reach found", async () => {
    let error = false
    try {
      prismaMock.feature.findUnique.mockResolvedValueOnce(null)
      await featureService.getFeature(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
})
