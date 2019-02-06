const fs = require('fs');
const log = fs.createWriteStream('./useragents.log', {
    flags: 'a',
});

const seen = {};

module.exports = function(req, res, next) {
    const ua = req.get('User-Agent');
    log.write(ua);

    seen[ua] = seen[ua] || 0;
    seen[ua]++;
    res.locals.seenUserAgents = seen;

    next();
}