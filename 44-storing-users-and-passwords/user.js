const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Before each save - do:
userSchema.pre('save', function(next) {
    // object "user" -> this
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});


// Each user can ".checkPassword()"
userSchema.methods.checkPassword = function(guess) {
    const user = this;
    return new Promise((resolve, reject) => {
       bcrypt.compare(guess, user.password, function(err, res) {
            if (err) reject(err);
            resolve(res);
       }) ;
    });
}


module.exports = new mongoose.model('User', userSchema);