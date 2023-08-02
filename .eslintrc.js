module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      experimentalDecorators: true,
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    complexity: ["error", 10],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/no-var-requires": "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
          "unknown",
        ],
        "newlines-between": "always",
      },
    ],
  },
}
