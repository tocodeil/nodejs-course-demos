const mongoose = require('mongoose');
const Link = require('./models/link');

async function main() {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    console.log('connected');

    // l = await Link.create({ href: 'https://www.duckduckgo.com' });

    const links = await Link.find().https();
    console.log(links);

    // console.log(l.protocol);
    // console.log(await l.getTitle());

    mongoose.disconnect();
}

main();
