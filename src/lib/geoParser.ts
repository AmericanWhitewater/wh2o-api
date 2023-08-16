import * as wkx from "wkx"

import { Geometry } from "../types"

/**
 * Parses a PostGIS geometry string into a GeoJSON geometry object.
 * based on https://gist.github.com/morenoh149/eee2493aafcd9a43c713097e211437e7
 * @param val PostGIS geometry string
 * @returns Geometry object
 */
export const geoParser = {
  postgisToGeoJSON: (val: string): Geometry => {
    const wkbBuffer = Buffer.from(val, "hex")
    const geometry = wkx.Geometry.parse(wkbBuffer)
    return geometry.toGeoJSON() as Geometry
  },
}
