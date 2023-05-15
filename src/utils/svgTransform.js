// See https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
// eslint-disable-next-line no-undef, import/no-anonymous-default-export
module.exports = {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
