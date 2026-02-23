// jest.config.ts (в корне проекта)
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
      diagnostics: false, // не падать на TS ошибки при запуске тестов
    },
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: [
    "<rootDir>/tests/unit/**/*.test.ts",
    "<rootDir>/tests/unit/**/*.test.tsx",
    "<rootDir>/tests/bdd/**/*.test.ts",
  ],
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/lib/**/*.{ts,tsx}",
    "src/store/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
};

export default createJestConfig(config);