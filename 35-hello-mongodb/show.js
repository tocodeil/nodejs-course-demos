const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
   await client.connect(); 
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const collection = db.collection('reminders');
    const items = await collection.find({}).toArray();
    console.log(items);
    client.close();
}

main();