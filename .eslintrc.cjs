/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:vitest/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['import', '@typescript-eslint', 'vitest'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				'newlines-between': 'never',
				warnOnUnassignedImports: true
			}
		],
		'import/no-unresolved': 'off', // TODO: Svelte5 preview moment
		'svelte/valid-compile': 'off' // TODO: Svelte5 preview moment
	}
};
