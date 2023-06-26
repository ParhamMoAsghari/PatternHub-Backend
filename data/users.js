// users.js
const {MongoClient, ServerApiVersion} = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to the MongoDB Atlas cluster
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.error('Failed to connect to MongoDB Atlas', error);
    }
}

// Get a reference to the users collection
function getUsersCollection() {
    const db = client.db('patternhubDB');
    const usersCollection = db.collection('users');
    return usersCollection;
}

// Retrieve a user by their ID
async function getUserById(id) {
    const usersCollection = getUsersCollection();
    const user = await usersCollection.findOne({id});
    return user;
}

// Retrieve a user by their email
async function getUserByEmail(email) {
    const usersCollection = getUsersCollection();
    const user = await usersCollection.findOne({email});
    return user;
}

// Create a new user
async function createUser(user) {
    const usersCollection = getUsersCollection();
    const newUser = {
        id: Date.now().toString(),
        ...user
    };
    await usersCollection.insertOne(newUser);
    return newUser;
}

module.exports = {
    connect,
    getUserById,
    getUserByEmail,
    createUser
};
