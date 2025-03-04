import { TSESLint } from "@typescript-eslint/experimental-utils";

const rule: TSESLint.RuleModule<"disallowExample"> = {
  defaultOptions: [],
  meta: {
    docs: {
      description: "An example rule.",
      recommended: "warn",
      url: "https://github.com/nissy-dev/template-typescript-eslint-plugin/blob/master/docs/rules/example-rule.md",
    },
    messages: {
      disallowExample: "'example' identifier is forbidden.",
    },
    schema: [],
    type: "suggestion",
  },

  create(context) {
    return {
      "Identifier[name='example']"(node) {
        context.report({
          node,
          messageId: "disallowExample",
        });
      },
    };
  },
};

export = rule;
