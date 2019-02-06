const Post = require('../models/post');

async function main() {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/mymessages');
    
    await Post.create({ author: 'ynon', text: 'Hello World' });
    await Post.create({ author: 'ynon', text: 'Nice to meet you', color: 'red' });
    
    mongoose.disconnect();   
}

main();