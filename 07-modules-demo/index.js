const music = require('./music');

const { shuffle } = require('./lib/utils');

const sentence = 'I can see the mountain';

console.log(shuffle(sentence.split(/\s+/)).join(' '));
