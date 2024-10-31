module.exports = {
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: 'reports/junit',
            outputName: 'results.xml',
        }],
    ],
};