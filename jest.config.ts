import type { Config } from 'jest';

const config: Config = {
  // Não defina `testEnvironment` aqui na raiz, pois usaremos `projects`
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/tests/unit/**/*.test.ts?(x)'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
      transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      transformIgnorePatterns: ['node_modules/(?!(swiper)/)'],
    },
    {
      displayName: 'integration',
      testMatch: ['**/tests/integration/**/*.test.ts?(x)'],
      testEnvironment: 'node',
      transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
};

export default config;
