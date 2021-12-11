import { tester } from "..";
import rule from "../../src/rules/example-rule";

describe("Test for example-rule", () => {
  tester.run("example-rule", rule, {
    valid: ["var foo = 1;"],
    invalid: [
      {
        code: "var example = 1;",
        errors: [{ messageId: "disallowExample" }],
      },
    ],
  });
});
