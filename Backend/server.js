const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(bodyParser.json()); // FIXED: Call the function

const url = 'mongodb://localhost:27017';
const dbName = 'passop';
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect(); // FIXED: Properly wait for connection
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit the process if connection fails
    }
}

connectDB(); // Call the function to connect to MongoDB

const port = 3000;

// Get all passwords
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (error) {
        res.status(500).json({ error: "Database query failed" });
    }
});

// Save a password
app.post('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        await collection.insertOne(password);
        res.send({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Database insert failed" });
    }
});
//deleting the password
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult })
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
