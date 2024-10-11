import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', '.eslintrc.cjs'],
  },
  {
    root: true,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,  // Set TypeScript parser
    },
    env: { browser: true, es2020: true },
    extends: [
      js.configs.recommended, // ESLint recommended rules for JS
      'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
      'plugin:react-hooks/recommended',        // React hooks recommended rules
      'plugin:storybook/recommended'           // Storybook recommended rules
    ],
    plugins: {
      'react-hooks': reactHooks,   // React hooks plugin
      'react-refresh': reactRefresh,  // React refresh plugin
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
];
