import globals from 'globals';
import js from '@eslint/js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended, // Importando a configuração recomendada do ESLint
    {
        languageOptions: {
            globals: {
                ...globals.browser, // Mantém as variáveis globais do navegador
                ...globals.node, // Adiciona as variáveis globais do Node.js (inclui process)
            },
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'no-trailing-spaces': 'error',
            // Exemplo de regra
        }
    }
];
