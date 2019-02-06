const mongoose = require('mongoose');

const Contact = require('./contact');


async function main() {
    const connection = await mongoose.connect(
        'mongodb://localhost/test',
        { useNewUrlParser: true }
    );

    // const c1 = new Contact({ name: 'ynon', email: 'ynon@tocode.co.il' });
    // await c1.save();
    
    const c1 = await Contact.findById('5c27460f2ef7d0120c55d69d');    
    console.log(c1);
    mongoose.disconnect();
}

main();
