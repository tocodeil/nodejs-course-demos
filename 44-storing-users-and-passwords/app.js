const mongoose = require('mongoose');
const User = require('./models/user');

async function main() {
    const connection = await mongoose.connect(
        'mongodb://localhost/test', {
            useNewUrlParser: true,
            useCreateIndex: true,
        }
    );
    
    const c1 = new User({ email: 'ynon@gmail.com', password: 'secret' });
    const c2 = new User({ email: 'jj@gmail.com', password: '1234' });

    await c1.save();
    await c2.save();

    const ynon = await User.findOne({ email: 'ynon@gmail.com' });
    const password1Ok = await ynon.checkPassword('secret');
    const password2Ok = await ynon.checkPassword('1234');

    console.log('check password 1 = ', password1Ok);
    console.log('check password 2 = ', password2Ok);

    mongoose.disconnect();
}

main();
