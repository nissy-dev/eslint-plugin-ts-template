**forked from [mysticatea/template-eslint-plugin](https://github.com/mysticatea/template-eslint-plugin)**

---

This is a trial of [GitHub Repository Template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/).

Please update `package.json` after you created new repository with this template.

**File Structure**:

- `docs/rules/` is the directory to put documentation.
- `src/rules/` is the directory to put rule definitions.
- `scripts/` is the directory to put development scripts.
- `tests/` is the directory to put tests for `src/`.
- `.eslintignore` and `.eslintrc.js` are the configuration to lint this repository.

**Dependencies**:

This template uses [Jest](https://jestjs.io/) and [GitHub Actions](https://github.co.jp/features/actions) for tests, as same as ESLint itself. If you want to use other tools, customize it.

**Development Tools**:

- `npm run add-rule foo` command adds a rule definition.
- `npm update` command updates the following stuff by the `meta` property of rules:
  - the header of `docs/rules/*.md`.
  - `lib/configs/recommended.ts` file.
  - `lib/index.ts` file.
  - the rule table in `README.md` file.

**Github Actions**:

This template defines two workflows.

- `.github/workflows/lint.yaml`
  - Run linting and testing for each commit.
- `.github/workflows/release.yaml`
  - Release new packages when publish new release.
  - You need to set `NPM_TOKEN` to repository secrets.
- `.github/workflows/release-drafter.yaml`
  - Update draft release note by `release-drafter`
- `.github/workflows/dependabot-automerge.yaml`
  - Merge PRs created by `dependabot` automatically.

Below is an example of README.

---

# eslint-plugin-xxxx (template)

<!--
[![npm version](https://img.shields.io/npm/v/eslint-plugin-xxxx.svg)](https://www.npmjs.com/package/eslint-plugin-xxxx)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-xxxx.svg)](http://www.npmtrends.com/eslint-plugin-xxxx)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-xxxx.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-xxxx)
[![Coverage Status](https://codecov.io/gh/mysticatea/eslint-plugin-xxxx/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-xxxx)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-xxxx.svg)](https://david-dm.org/mysticatea/eslint-plugin-xxxx)
-->

A template for ESLint plugins.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
$ npm install --save-dev eslint-plugin-xxxx
```

## Usage

Write your config file such as `.eslintrc`.

```json
{
  "plugins": ["xxxx"],
  "rules": {
    "xxxx/example-rule": "error"
  }
}
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `xxxx/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->

| Rule ID                                           | Description      | recommended |
| :------------------------------------------------ | :--------------- | :---------: |
| [xxxx/example-rule](./docs/rules/example-rule.md) | An example rule. |     ⭐️     |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases]()

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests.
- `npm run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.
