module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,html,ico}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};