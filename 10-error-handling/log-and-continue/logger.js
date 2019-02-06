const winston = require('winston');

winston.configure({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'log/app.log'}),
    ]
})

module.exports = winston;