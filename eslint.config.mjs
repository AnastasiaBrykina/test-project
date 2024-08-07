import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { ignores: ["webpack.config.js"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  eslintPluginPrettierRecommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
        ...globals.es2016,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    // rules: {
    //   // ... any rules you want
    //   "@typescript-eslint/no-require-imports": [
    //     "error",
    //     { allow: ["/webpack.config.js$"] },
    //   ],
    // },
  },
];
