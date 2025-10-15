import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"], // top-level ignore
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: { react: pluginReact, prettier: pluginPrettier },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  pluginReact.configs.flat.recommended,
]);
