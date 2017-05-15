var markdown = require('markdown').markdown;

module.exports = function (src, map) {
  if (this.cacheable) {
    this.cacheable();
  }
  return markdown.toHTML(src);
};
