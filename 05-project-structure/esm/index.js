/**
 * ES Modules
 * 
 */

import { twice } from './src/utils.js';
import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

console.log(twice(6));

