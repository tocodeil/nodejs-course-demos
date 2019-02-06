const mongoose = require('mongoose');
const request = require('request-promise');
const { parse } = require('node-html-parser');

const linkSchema = new mongoose.Schema({
    href: String,
});

linkSchema.query.secure = function() {
    return this.where({ 'href': /^https:\/\// });
}

linkSchema.virtual('protocol').get(function() {
    return new URL(this.href).protocol;
});

linkSchema.methods.getTitle = async function() {
    const html = await request(this.href);
    const root = parse(html);
    return root.querySelector('title').rawText;
};

module.exports = mongoose.model('Link', linkSchema);
