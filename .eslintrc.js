module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      files: "scripts/**/*.ts",
      rules: {
        "no-console": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-namespace": "off",
      },
    },
  ],
  env: {
    node: true,
  },
};
