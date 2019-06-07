module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "strict": 0,
    "react/jsx-filename-extension": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "spaced-comment": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/alt-text": 0
  }
};
