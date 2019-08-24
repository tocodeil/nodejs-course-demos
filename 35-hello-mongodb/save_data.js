const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const connectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, connectOptions);

async function main() {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('items');

    collection.insertOne({ name: 'iPhone', cost: 300 });
    collection.insertOne({ name: 'Android', cost: 200 });

    collection.insertOne({ name: 'Tablet', cost: 500 });


    client.close();
}

main();
