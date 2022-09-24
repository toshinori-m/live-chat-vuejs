module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
};
