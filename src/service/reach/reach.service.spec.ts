import { Gage, Reach } from "@prisma/client"

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

const getGeometrySpy = jest.spyOn(ReachService.prototype, "getGeometry")
const getFeaturesSpy = jest.spyOn(ReachService.prototype, "getFeatures")

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

    expect(result).toEqual([
      {
        abstract: "Test Abstract",
        altname: "Test Alt Name",
        avggradient: 1,
        county: "Test County",
        description: "Test Description",
        features: [],
        geom: [[-123.78037308890543, 53.929411764705875]],
        grade: "Test Class",
        id: 1,
        length: 1,
        maxgradient: 1,
        permitid: null,
        photoid: null,
        river: "Test Reach",
        section: "Test Section",
        shuttledetails: "Test Shuttle Details",
        state: "CO",
        zipcode: "12345",
      },
    ])
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
  it("should throw an error if updating a reach fails", async () => {
    let error = false
    try {
      prismaMock.reach.update.mockResolvedValueOnce(null as unknown as Reach)
      await reachService.updateReach(1, mockReaches[0])
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if fetching reaches by state fails", async () => {
    let error = false
    try {
      getSpy.mockResolvedValueOnce(null as unknown as Reach)
      await reachService.getReachesByState("CO")
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if deleting a reach fails", async () => {
    let error = false
    try {
      prismaMock.reach.delete.mockResolvedValueOnce(null as unknown as Reach)
      await reachService.deleteReach(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should handle deleting a reach", async () => {
    prismaMock.reach.delete.mockResolvedValueOnce(mockReaches[0])
    const result = await reachService.deleteReach(1)
    expect(result).toEqual(mockReaches[0])
  })
  it("should get gages for a reach", async () => {
    prismaMock.gage.findMany.mockResolvedValueOnce([])
    const result = await reachService.getGages(1)
    expect(result).toEqual([])
  })
  it("should throw an error if getting gages fails", async () => {
    let error = false
    try {
      prismaMock.gage.findMany.mockResolvedValueOnce(null as unknown as Gage[])
      await reachService.getGages(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
  it("should throw an error if no reach is found", async () => {
    getGeometrySpy.mockResolvedValueOnce([])
    getFeaturesSpy.mockResolvedValueOnce([])
    let error = false
    try {
      prismaMock.reach.findUnique.mockResolvedValueOnce(null)
      await reachService.getReach(1)
    } catch {
      error = true
    }
    expect(error).toEqual(true)
  })
})
