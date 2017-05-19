// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    {{#if_eq css "cssnext"}}
    "postcss-import": {},
    "postcss-cssnext": {}
    {{else}}
    "autoprefixer": {}
    {{/if_eq}}
  }
}
