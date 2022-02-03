module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/_sites/.+/cypress/'
  ],
  moduleDirectories: [
    // Add for every site to ensure baseUrl references
    'node_modules',
    './components'
  ],
  moduleNameMapper: {}
};
