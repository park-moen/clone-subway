module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "public"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [".*"],
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message: "import React from 'react' makes bundle size larger",
          },
        ],
      },
    ],
    "import/extensions": ["error", "ignorePackages"],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],

    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type",
          "unknown",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "**/*.tsx",
            group: "unknown",
            position: "before",
          },
          {
            pattern: "**/*.css",
            group: "unknown",
            position: "after",
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
  },
};
