module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  plugins: ["prettier"],
  rules: {

    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    'react/function-component-definition':0,
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "import/no-named-default": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "func-names": 0,
    "semi":['error', 'never'],
  },
}
