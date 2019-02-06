const bcrypt = require('bcrypt');

const plainTextPassword = 'ninja';
const saltRounds = 10;

bcrypt.hash(plainTextPassword, saltRounds, function(err, hash) {
    if (err) throw err;

    console.log(hash);
    console.log(plainTextPassword);

    bcrypt.compare('hello', hash, function(err, res) {
        console.log(res);
    });
});