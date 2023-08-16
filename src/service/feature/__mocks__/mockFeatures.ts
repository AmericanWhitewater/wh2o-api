import { Feature, FeatureCharacter } from "@prisma/client"

import { FeatureExtended } from "../../../types"

export const mockFeatures: Feature[] = [
  {
    id: 1,
    name: "feature 1",
    character: FeatureCharacter.rapid,
    reachId: 1,
    distance: 1,
    grade: "none",
  },
  {
    id: 2,
    name: "feature 2",
    character: FeatureCharacter.rapid,
    reachId: 1,
    distance: 3,
    grade: "none",
  },
  {
    id: 3,
    name: "feature 3",
    character: FeatureCharacter.rapid,
    reachId: 1,
    distance: 2,
    grade: "none",
  },
]

export const mockExtendedFeatures: FeatureExtended[] = mockFeatures.map(
  (feature) => ({
    ...feature,
    location: [],
  })
)
