const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandSchema = new mongoose.Schema({
    name: String,
    genres: [String],
    members: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
});

module.exports = mongoose.model('Band', bandSchema);
