module.exports = {
  automock: false,

  clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '<rootDir>/src/locales',
    '<rootDir>/src/client/index.tsx',
    '<rootDir>/src/common/i18n.ts',
    '<rootDir>/src/common/routes.tsx',
    '<rootDir>/src/common/theme',
    '<rootDir>/src/common/store/index.ts',
    '<rootDir>/src/common/pages/Root/Root.*',
    '<rootDir>/src/server',
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  setupFiles: ['<rootDir>/test/shim.ts'],

  setupFilesAfterEnv: ['<rootDir>/test/enzyme.ts', '<rootDir>/test/mocks.ts', '<rootDir>/test/setup.ts'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx|js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/test/svgTransform.ts',
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-file',
  },

  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-serializer-react-helmet-async'],

  moduleNameMapper: {
    '@test(.*)$': '<rootDir>/test/$1',
    '@assets(.*)$': '<rootDir>/src/assets/$1',
    '@client(.*)$': '<rootDir>/src/client/$1',
    '@common(.*)$': '<rootDir>/src/common/$1',
    '@server(.*)$': '<rootDir>/src/server/$1',
    '@locales(.*)$': '<rootDir>/src/locales/$1',
  },
};
