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
