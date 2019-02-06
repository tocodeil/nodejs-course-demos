module.exports = function(ips) {
    return function(req, res, next) {
        const remoteIp = req.connection.remoteAddress;
        if (!ips.includes(remoteIp)) {
            next(new Error(`Forbidden. your ip is: ${req.connection.remoteAddress}`));
        }
        next();
    };
}