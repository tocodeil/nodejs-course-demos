const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: String,
    born: Number,
    died: Number,
});

module.exports = mongoose.model('Artist', artistSchema);


