const mongoose = require('mongoose');
const Band = require('./models/band');
const Artist = require('./models/artist');

async function main() {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

    [lr, jc, lmy] = await Artist.insertMany([
        { name: 'Lou Reed', born: 1942, died: 2013 },
        { name: 'John Cale', born: 1942 },
        { name: 'LaMonte Young', born: 1935 },
    ]);
    await Band.insertMany([
        {
            name: 'Dream Syndicate',
            genres: 'Avant-Garde',
            members: [lmy._id, jc._id],
        },
        {
            name: 'The Velvet Underground',
            genres: 'rock',
            members: [lr._id, jc._id],
        },

    ])
    mongoose.disconnect();
}


main();
