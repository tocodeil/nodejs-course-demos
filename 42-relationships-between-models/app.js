const mongoose = require('mongoose');
const Band = require('./models/band');
const Artist = require('./models/artist');
const _ = require('lodash');

async function main() {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

    const vu = await Band.find({ name: 'The Velvet Underground'}).populate('members');
    console.log(vu);

    mongoose.disconnect();
}

async function whereDidYouPlay(name) {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

    const artist = await Artist.findOne({ name });
    const bands = await Band.find({ members: artist });
    console.log(bands);

    mongoose.disconnect();
}

async function whoDidYouPlayWith(name) {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

    const artist = await Artist.findOne({ name });
    const bands = await Band.find({ members: artist }).populate('members');
    const members = _.chain(bands).map('members').flatten().uniqBy('_id').value();
    console.log(members);

    mongoose.disconnect();

}

// main();
whoDidYouPlayWith('John Cale');

