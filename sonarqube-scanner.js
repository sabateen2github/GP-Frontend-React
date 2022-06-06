const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: '24879f5972ebb3c6c247edceef4bf0db243d8b92',
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
);