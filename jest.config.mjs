import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment

  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest

  transform: {
    "^.+\\.svg$": "<rootDir>/src/utils/svgTransform.js",
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
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
