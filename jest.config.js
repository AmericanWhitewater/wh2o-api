module.exports = {
  verbose: true,
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  maxWorkers: "50%",
  setupFiles: ["dotenv/config"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/@types/**/*",
    "!src/**/index.ts",
    "!src/**/lambda.ts",
    "!src/**/server.ts",
    // TEMP
    "!src/**/feature-service.ts",
    "!src/**/gage-service.ts",
    "!src/**/user-service.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["lcov", "text"],
}
