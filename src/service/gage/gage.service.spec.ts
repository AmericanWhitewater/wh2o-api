import { Gage } from "@prisma/client"

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
  it("should throw an error if a gage is not found", async () => {
    let error = false
    try {
      prismaMock.gage.findUnique.mockResolvedValueOnce(null)
      await gageService.getGage(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should update a gage", async () => {
    prismaMock.gage.update.mockResolvedValueOnce(mockGages[0])
    const result = await gageService.updateGage(1, mockGages[0])
    expect(result).toEqual(mockGages[0])
  })
  it("should delete a gage", async () => {
    prismaMock.gage.delete.mockResolvedValueOnce(mockGages[0])
    const result = await gageService.deleteGage(1)
    expect(result).toEqual(mockGages[0])
  })
  it("should create a gage", async () => {
    prismaMock.gage.create.mockResolvedValueOnce(mockGages[0])
    const result = await gageService.createGage(mockGages[0])
    expect(result).toEqual(mockGages[0])
  })
  it("should fetch gages by state", async () => {
    prismaMock.gage.findMany.mockResolvedValueOnce(mockGages)
    const result = await gageService.getGagesByState("CO")
    expect(result).toEqual(mockGages)
  })
  it("should fetch gages by reach", async () => {
    prismaMock.gage.findMany.mockResolvedValueOnce(mockGages)
    const result = await gageService.getGagesByReach(1)
    expect(result).toEqual(mockGages)
  })
  it("should throw an error if updating a gage fails", async () => {
    let error = false
    try {
      prismaMock.gage.update.mockResolvedValueOnce(null as unknown as Gage)
      await gageService.updateGage(1, mockGages[0])
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if deleting a gage fails", async () => {
    let error = false
    try {
      prismaMock.gage.delete.mockResolvedValueOnce(null as unknown as Gage)
      await gageService.deleteGage(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
})
