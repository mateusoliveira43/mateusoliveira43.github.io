/** Enables svg files in tests */
module.exports = {
  process() {
    return 'module.exports = {}';
  },
  getCacheKey() {
    return 'svgTransform';
  },
};
