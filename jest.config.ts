import type { Config } from '@jest/types';

// TODO option to turn warnings into errors?
const coveragePercentage = 0; // TODO change to 100
const testUtilsPath = '<rootDir>/tests/tests-utils';
const config: Config.InitialOptions = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage-results/',
  coveragePathIgnorePatterns: ['config/', 'styles/', 'styles.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: coveragePercentage,
      functions: coveragePercentage,
      lines: coveragePercentage,
      statements: coveragePercentage,
    },
  },
  setupFilesAfterEnv: [`${testUtilsPath}/setupTests.ts`],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '^.+\\.svg$': `${testUtilsPath}/svgTransform.ts`,
  },
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy',
  },
};
export default config;
