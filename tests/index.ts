import { TSESLint } from "@typescript-eslint/experimental-utils";

export const tester = new TSESLint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});
