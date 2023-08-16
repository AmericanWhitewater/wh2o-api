import { Reach } from "@prisma/client"

import { ReachExtended } from "../../../types"

export const mockReaches: Reach[] = [
  {
    id: 1,
    river: "Test Reach",
    state: "CO",
    section: "Test Section",
    grade: "Test Class",
    abstract: "Test Abstract",
    altname: "Test Alt Name",
    avggradient: 1,
    maxgradient: 1,
    length: 1,
    zipcode: "12345",
    county: "Test County",
    description: "Test Description",
    permitid: null,
    shuttledetails: "Test Shuttle Details",
    photoid: null,
  },
]

export const mockReachesExt: ReachExtended[] = [
  {
    ...mockReaches[0],
    geom: [],
    features: [],
  },
]
