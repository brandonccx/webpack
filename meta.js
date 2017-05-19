module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "store": {
      "type": "confirm",
      "message": "Install vuex for state management?"
    },
    "uiLib": {
      "type": "list",
      "message": "Which UI library do you want to install?",
      "choices": [
        //TODO: Add more UI libraries
        {
          "name": "iview (https://www.iviewui.com/docs/guide/install)",
          "value": "iview",
          "short": "iview"
        },
        {
          "name": "<none> (will not install any lib)",
          "value": "",
          "short": "none"
        }
      ]
    },
    "css": {
      "type": "list",
      "message": "Which CSS preprocessor do you want to use?",
      "choices": [
        {
          "name": "cssnext (postcss)",
          "value": "cssnext",
          "short": "cssnext"
        },
        {
          "name": "<none> (I want to install myself)",
          "value": "",
          "short": "none"
        }
      ]
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code? Standard (with semi-always) (https://github.com/feross/standard)"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?",
      "default": false
    },
    "doc": {
      "type": "confirm",
      "message": "Use document builder?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "src/store/**/*": "store",
    "build/doc-server.js": "doc",
    "build/markdown-loader.js": "doc"
  },
  "completeMessage": [
    "Start development:\n\n",
    "  {{^inPlace}}cd {{destDirName}}\n",
    "  {{/inPlace}}yarn install\n",
    "  yarn run dev\n\n",
    "Or with production and documents:\n\n",
    "  yarn run build\n",
    "  yarn run doc\n\n",
    "And for test:\n\n",
    "  yarn run test\n\n",
    "Documentation can be found at https://vuejs-templates.github.io/webpack"
  ].join('')
};
