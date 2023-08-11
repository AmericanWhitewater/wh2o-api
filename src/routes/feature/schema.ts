import { featureClasses } from "../../lib/feature-classes"

export default {
  getFeature: {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            description: { type: "string" },
            character: { type: "string", enum: featureClasses },
          },
        },
      },
    },
  },
}
