// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    {{#if_eq css "cssnext"}}
    "postcss-import": {
      path: [path.resolve(__dirname, 'src/style')]
    },
    "postcss-mixins": {},
    "postcss-cssnext": {}
    {{else}}
    "autoprefixer": {}
    {{/if_eq}}
  }
}
