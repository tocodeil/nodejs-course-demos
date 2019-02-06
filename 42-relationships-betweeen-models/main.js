const mongoose = require('mongoose');
const Band = require('./bands');
const Artist = require('./artists');

async function main() {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

    /*
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
    ]);
    */

    const bands = await Band.find({}).populate('members');    
    console.log(bands[0].members[0].name);

    const jc = await Artist.findOne({ name: 'John Cale' });
    const bandsWithJc = await Band.find({ members: jc });
    console.log(bandsWithJc);

    mongoose.disconnect();
}

main();
