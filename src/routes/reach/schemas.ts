import { reachClasses } from "../../lib/reach-classes"

const getReachSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
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

const getReachByStateSchema = {
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
            class: { type: "string", enum: reachClasses },
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
            name: { type: "string" },
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
}

export default {
  getReachSchema,
  getReachByStateSchema,
  getReachFeaturesSchema,
  getReachGagesSchema,
  updateReachSchema,
}
