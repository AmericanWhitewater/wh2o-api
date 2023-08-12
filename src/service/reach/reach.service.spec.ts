import { ReachService } from "./reach.service"
import { prismaMock } from "../../plugins/database/singleton"
import { mockReaches, mockReachesExt } from "./__mocks__/mockReaches"
import http from "../../http"
import {
  mockExtendedFeatures,
  mockFeatures,
} from "../feature/__mocks__/mockFeatures"
import { FeatureService } from "../feature/feature.service"

const getSpy = jest.spyOn(http, "get")

const getLocationSpy = jest.spyOn(FeatureService.prototype, "getLocation")

const reachService = new ReachService(prismaMock)

const mockLegacyReaches = mockReaches.map((r) => ({
  ...r,
  geom: "0101000020E6100000C0E1F7A1F1F15EC0F6F6F6F6F6F64A40",
}))

const coords = [
  [1, 2],
  [3, 4],
  [5, 6],
  [1, 2],
]

describe("ReachService", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it("should return a reach", async () => {
    prismaMock.$queryRaw.mockResolvedValueOnce([])
    prismaMock.feature.findMany.mockResolvedValueOnce([])
    prismaMock.reach.findUnique.mockResolvedValueOnce(mockReaches[0])
    const result = await reachService.getReach(1)
    expect(result).toEqual(mockReachesExt[0])
  })
  it("should throw an error if a reach is not found", async () => {
    let error = false
    try {
      prismaMock.reach.findUnique.mockResolvedValueOnce(null)
      await reachService.getReach(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should update a reach", async () => {
    prismaMock.reach.update.mockResolvedValueOnce(mockReaches[0])
    const result = await reachService.updateReach(1, mockReaches[0])
    expect(result).toEqual(mockReaches[0])
  })
  it("should fetch reaches by state", async () => {
    getSpy.mockResolvedValueOnce({ data: mockLegacyReaches })
    const result = await reachService.getReachesByState("CO")
    expect(result).toEqual(mockReachesExt)
  })
  it("should return coordinates of the polygon geometry", async () => {
    prismaMock.$queryRaw.mockResolvedValueOnce([
      {
        geom: {
          type: "Polygon",
          coordinates: [coords],
        },
      },
    ])
    const geom = await reachService.getGeometry(1)
    expect(geom).toEqual(coords)
  })
  it("should return coordinates of the linestring geometry", async () => {
    prismaMock.$queryRaw.mockResolvedValueOnce([
      {
        geom: {
          type: "LineString",
          coordinates: coords,
        },
      },
    ])
    const geom = await reachService.getGeometry(1)
    expect(geom).toEqual(coords)
  })
  it("should return coordinates of the point geometry", async () => {
    prismaMock.$queryRaw.mockResolvedValueOnce([
      {
        geom: {
          type: "Point",
          coordinates: coords[0],
        },
      },
    ])
    const geom = await reachService.getGeometry(1)
    expect(geom).toEqual([coords[0]])
  })
  it("should return an array of sorted features", async () => {
    prismaMock.feature.findMany.mockResolvedValueOnce(mockFeatures)
    getLocationSpy.mockResolvedValueOnce([])

    const result = await reachService.getFeatures(1)
    expect(result).toEqual([
      mockExtendedFeatures[0],
      mockExtendedFeatures[2],
      mockExtendedFeatures[1],
    ])
  })
})
