module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'clover'],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
  };