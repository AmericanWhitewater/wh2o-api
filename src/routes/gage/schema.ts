const baseProperties = {
  id: { type: "number" },
  name: { type: "string" },
  state: { type: "string" },
}

export default {
  getGageSchema: {
    schema: {
      querystring: {
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
      },
    },
  },
  updateGageSchema: {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          state: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            ...baseProperties,
          },
        },
      },
    },
  },
  createGageSchema: {
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          state: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            ...baseProperties,
          },
        },
      },
    },
  },
  deleteGageSchema: {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
      },
      response: {
        200: {
          type: "number",
        },
      },
    },
  },
}
