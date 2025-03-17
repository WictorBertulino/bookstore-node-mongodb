import globals, { node } from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: globals.browser 
    },
    rules:{
    "indent": ["error", 2]
    },
    env:{
      node: true,
    }
  },
 
  pluginJs.configs.recommended,
];