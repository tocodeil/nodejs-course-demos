var MobileDetect = require('mobile-detect');

module.exports = function(req, res, next) {
    const md = new MobileDetect(req.get('User-Agent'));
    res.locals.isMobile = md.mobile();
    return next();
}