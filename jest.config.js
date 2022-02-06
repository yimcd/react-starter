module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleDirectories": [
    "node_modules",
    "<rootDir>/src",
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}