import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment

  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  bail: 4,
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
