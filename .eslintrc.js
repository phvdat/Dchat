module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,jsx,ts,tsx}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier", "simple-import-sort"],
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
      },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 80,
        trailingComma: "es5",
        semi: true,
        "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
      },
    ],

    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]],
      },
    ],
  },
};
