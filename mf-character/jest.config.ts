import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};

export default config;
