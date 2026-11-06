import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["node_modules", "coverage", "dist", ".aws-sam"]),

  {
    files: ["**/*.js"],
    extends: [js.configs.recommended],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },

    plugins: {
      "@stylistic": stylistic,
    },

    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      curly: "error",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "no-console": "off",
    },
  },
]);
