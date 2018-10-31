module.exports = {
  root: true,
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "jest": true,
      "node": true,
      "es6": true,
  },
  "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
    "jest",
    "react",
    "redux-saga",
    "jsx-a11y",
    "import"
  ],
  "extends": "airbnb",
  "rules": {
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'to' ]
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': 'off',
    'global-require': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'warn', // for react arrow funcs
    indent: ['error', 2],
    'linebreak-style': 'off',
    "react/jsx-filename-extension": [
      1, { "extensions": [".js", ".jsx"] }
    ],
    "react/prefer-stateless-function": [
      2, { "ignorePureComponents": true }
    ],
    "react/forbid-prop-types": [0, { "forbid": [] }],
    "import/extensions": [1, "never", { "svg": "always" }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "quotes": ['error', 'single'],
    "semi": ["error", "always"],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-undef': 0,
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'import/extensions': ['off', 'never'],
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': [2, { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
    'react/jsx-one-expression-per-line': 0,
  },
};