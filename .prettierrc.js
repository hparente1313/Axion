/** @type {import('prettier').Config} */
const config = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'consistent',
	jsxSingleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	rangeStart: 0,
	rangeEnd: Infinity,
	// parser: '',
	// requirePragma: true,
	// insertPragma: true,
	proseWrap: 'never',
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: true,
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'off',
	singleAttributePerLine: true,
}

export default config
