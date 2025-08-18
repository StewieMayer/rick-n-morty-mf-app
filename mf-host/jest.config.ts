
import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  transform:{
    '^.+\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    '^.+\.(js|jsx)$': 'babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};

export default config;
