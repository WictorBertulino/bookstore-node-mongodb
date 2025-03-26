import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended, // Importando a configuração recomendada do ESLint

  {
    languageOptions: { 
      globals: globals.browser, // Configurando os globals
    },
    rules: {
      "indent": ["error", 2], // Exemplo de regra
    }
  }
];
