/**
 * @param  {String} stackTrace
 * @return {String}
 */
module.exports = function(stackTrace) {
  var filterRegex = /grunt-behance/;

  return stackTrace.split('\n').filter(function(line) {
    return !filterRegex.test(line);
  }).join('\n');
};
