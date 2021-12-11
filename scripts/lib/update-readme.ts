import fs from "fs";
import path from "path";
import { rules } from "./rules";
import type { RuleInfo } from "./rules";

/**
 * Render a given rule as a table row.
 */
function renderRule(rule: RuleInfo): string {
  const mark = `${rule.recommended ? "⭐️" : ""}${rule.fixable ? "✒️" : ""}`;
  const link = `[${rule.id}](./docs/rules/${rule.name}.md)`;
  const description = rule.description || "(no description)";

  return `| ${link} | ${description} | ${mark} |`;
}

/**
 * Render a given category as a section.
 */
function renderRules(rules: RuleInfo[]): string {
  return `| Rule ID | Description | recommended |
|:--------|:------------|:--:|
${rules.map(renderRule).join("\n")}
`;
}

const filePath = path.resolve(__dirname, "../../README.md");
const content = renderRules(rules);

fs.writeFileSync(
  filePath,
  fs
    .readFileSync(filePath, "utf8")
    .replace(
      /<!--RULE_TABLE_BEGIN-->[\s\S]*<!--RULE_TABLE_END-->/u,
      `<!--RULE_TABLE_BEGIN-->\n\n${content}\n<!--RULE_TABLE_END-->`
    )
);
