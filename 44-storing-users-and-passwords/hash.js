const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'secret';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if (err) { throw err; }
    console.log(`Original password was: ${myPlaintextPassword}`);
    console.log(`bcrypt() == ${hash}`);

    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        console.log('Hash matches original password');
    });

    bcrypt.compare('boo', hash, function(err, res) {
        console.log("Hash doesn't match password 'boo'");
    });
});