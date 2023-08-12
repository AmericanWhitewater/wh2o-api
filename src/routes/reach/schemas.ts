import { reachClasses } from "../../lib/reach-classes"

const baseProperties = {
  id: { type: "number" },
  river: { type: "string" },
  section: { type: "string" },
  altname: { type: "string" },
  class: { type: "string", enum: reachClasses },
  state: { type: "string" },
  avggradient: { type: "number" },
  permiturl: { type: "string" },
  permitinfo: { type: "string" },
  description: { type: "string" },
  edited: { type: "string" },
  length: { type: "number" },
  maxgradient: { type: "number" },
  plat: { type: "number" },
  plon: { type: "number" },
  geom: {
    type: "array",
    items: {
      type: "array",
      items: {
        type: "number",
      },
    },
  },
  status: { type: "string" },
  permissions: {
    type: "array",
    items: {
      type: "object",
      properties: {
        domain: { type: "string" },
        permission: { type: "string" },
        result: { type: "string" },
      },
    },
  },
}

const getReachSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          ...baseProperties,
          features: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                },
                name: {
                  type: "string",
                },
                grade: {
                  type: "string",
                },
                character: {
                  type: "string",
                  enum: [
                    "access",
                    "hazard",
                    "other",
                    "playspot",
                    "portage",
                    "putin",
                    "rapid",
                    "takeout",
                    "waterfall",
                  ],
                },
                distance: {
                  type: ["number", "null"],
                },
              },
            },
          },
        },
        required: ["geom"],
      },
    },
  },
}

const getReachByStateSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            ...baseProperties,
          },
        },
      },
    },
  },
}

const getReachFeaturesSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            distance: { type: "number" },
            name: { type: "string" },
            character: { type: "string" },
            location: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
        },
      },
    },
  },
}

const getReachGagesSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
          },
        },
      },
    },
  },
}

const updateReachSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        ...baseProperties,
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          ...baseProperties,
        },
      },
      "5xx": {
        description: "Server Error",
        type: "string",
      },
    },
  },
}

export default {
  getReachSchema,
  getReachByStateSchema,
  getReachFeaturesSchema,
  getReachGagesSchema,
  updateReachSchema,
}
