const logger = require('./logger');

logger.exceptions.handle(
    new logger.transports.File({ filename: 'exceptions.log' })
);
logger.exitOnError = false;

console.log('1');

throw new Error('bye bye...');

console.log('2');