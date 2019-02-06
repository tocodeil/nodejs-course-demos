const mongoose = require('mongoose');
const Link = require('./link');

async function main() {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    // l = await Link.create({ href: 'https://www.duckduckgo.com' });
    // console.log(l.id);
    links = await Link.find().secure();
    console.log(links);

    mongoose.disconnect();
}


main();