/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	bail: 0,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage/jest',
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/assets/'
	],
	coverageProvider: 'v8',
	coverageReporters: ['lcov', 'text-summary'],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0
		}
	},
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'^@/(.*)$': ['<rootDir>/src/*']
	},
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: './coverage/jest-html',
				filename: 'report.html',
				pageTitle: 'Test Report'
			}
		]
	],
	rootDir: '.',
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts', 'jest-extended/all'],
	snapshotSerializers: ['@emotion/jest/serializer'],
	testEnvironment: 'jsdom',
	testRegex: ['(/tests/.*(test|spec))\\.[jt]sx?$'],
	verbose: true,
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname'
	]
};
