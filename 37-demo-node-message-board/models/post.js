const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    author: { type: String, required: true },
    text: String,
    color: { type: String, default: 'black' },
    image: Buffer,
});

module.exports = mongoose.model('Post', postSchema);