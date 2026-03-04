import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      pluginReact.configs.flat.recommended,
      eslintPluginUnicorn.configs.recommended,
    ],
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    plugins: {},
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            kebabCase: true,
          },
        },
      ],
      "unicorn/import-style": [
        "error",
        {
          styles: {
            util: false,
            path: {
              named: true,
            },
          },
        },
      ],
      "unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false }],
      "unicorn/switch-case-braces": ["error", "always"],
      "unicorn/relative-url-style": ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "none",
          argsIgnorePattern: "^_",
        },
      ],
      semi: "error",
      "no-console": "error",
      "no-debugger": "error",
      quotes: ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
      "max-lines": ["warn", 250],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreComments: true,
        },
      ],
      "react/display-name": "off",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);
