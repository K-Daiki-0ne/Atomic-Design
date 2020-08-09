module.exports = {
  verbose: true,
  "roots": [
    "./src"
  ],
  "setupTest": [
    "<rootDir>/test/setupTests.js"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.js",
    "!src/config/serviceWorker.js"
  ],
  "coveragePathIgnorePatterns": [
    "./src/index.js",
    "./src/config/serviceWorker.js"
  ],
  "coverageReporters": [
    "json",
    "lcov",
    "text-summary",
    "clover"
  ],
  "coverageThreshold": {
    "global": {
      "statements": 95,
      "branches": 95,
      "lines": 95,
      "functions": 95
    }
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/ts-jest"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
}