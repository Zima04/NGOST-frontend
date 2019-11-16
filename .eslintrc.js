module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['@vue/airbnb', 'plugin:vue/recommended'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-console': 'error',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'function-paren-newline': 'off',
		'comma-dangle': 'off',
		'space-before-function-paren': 'off',
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
		'func-names': 'off',
		'no-unused-expressions': ['error', { allowShortCircuit: true }],
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'vue/html-closing-bracket-spacing': 'off',
		'vue/html-closing-bracket-newline': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
