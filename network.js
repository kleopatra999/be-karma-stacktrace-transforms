/**
 * @param  {String} stackTrace
 * @return {String}
 */
module.exports = function(stackTrace) {
  var filterRegex = /(grunt-behance|jquery.js)/;

  return stackTrace.split('\n').filter(function(line) {
    return !filterRegex.test(line);
  }).join('\n');
};
