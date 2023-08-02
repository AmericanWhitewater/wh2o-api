export const getReachSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          river: { type: "string" },
          section: { type: "string" },
          altname: { type: "string" },
          class: { type: "string" },
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
          geom: { type: "string" },
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
        },
      },
    },
  },
}

export const getReachByStateSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            river: { type: "string" },
            section: { type: "string" },
            name: { type: "string" },
          },
        },
      },
    },
  },
}

export const getReachFeaturesSchema = {
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

export const getReachGagesSchema = {
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
