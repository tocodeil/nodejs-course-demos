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
    // Insert some documents
    collection.insertOne({ user: 'ynon', text: 'feed the cat' });
    collection.insertOne({ user: 'ynon', text: 'write some mongo code' });

    client.close();
}


main();