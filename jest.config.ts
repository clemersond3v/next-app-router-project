import { Config } from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest', // ✅ apenas string aqui
  },
  transformIgnorePatterns: [
    'node_modules/(?!(swiper)/)',
  ],
  testMatch: [
    '**/tests/unit/**/*.test.ts?(x)',
    '**/tests/integration/**/*.test.ts?(x)',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
};

export default config;
