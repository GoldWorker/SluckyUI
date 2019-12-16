module.exports = {
    testURL: 'http://localhost:7001',
    setupFiles: [
        './test/setup.js'
    ],
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    testPathIgnorePatterns: [
        'node_modules/',
        'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))',
        '<rootDir>/node_modules/(?!(lodash-es|other-es-lib))'
    ],
    testRegex: '.*\\.test\\.jsx$',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/components/**/*.{jsx}'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        // '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
        '^.+\\.svg$': 'jest-svg-transformer'
    }
};
