module.exports = function(req, res, next) {
    if (req.accepts('html')) {
        return next();
    }

    if (req.accepts('json')) {
        res.render = function(_view, data) {
            res.send(data);
        }
    };

    return next();
}