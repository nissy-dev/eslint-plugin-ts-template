import fs from "fs";
import path from "path";
import { pluginId } from "./plugin-id";
const rootDir = path.resolve(__dirname, "../../src/rules/");

export type RuleInfo = {
  filePath: string;
  id: string;
  name: string;
  description: string;
  recommended: boolean;
  deprecated: boolean;
  fixable: boolean;
  replacedBy: string[];
};

export const rules: RuleInfo[] = fs
  .readdirSync(rootDir)
  .sort()
  .map((filename): RuleInfo => {
    const filePath = path.join(rootDir, filename);
    const name = filename.slice(0, -3);
    const { meta } = require(filePath);

    return {
      filePath,
      id: `${pluginId}/${name}`,
      name,
      deprecated: Boolean(meta.deprecated),
      fixable: Boolean(meta.fixable),
      replacedBy: [],
      ...meta.docs,
    };
  });
