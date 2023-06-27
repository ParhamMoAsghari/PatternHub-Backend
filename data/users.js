const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

class Users {
    constructor() {
        this.client = null;
        this.db = null;
        this.usersCollection = null;
    }

    async connect() {
        try {
            const uri = process.env.DB_URI;
            this.client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                },
            });

            await this.client.connect();
            console.log('Connected to MongoDB Atlas');
            await this.client.db('admin').command({ ping: 1 });
            console.log('Pinged your deployment. You successfully connected to MongoDB!');

            this.db = this.client.db('patternhubDB');
            this.usersCollection = this.db.collection('users');
            console.log('Users collection is ready!')
        } catch (error) {
            console.error('Failed to connect to MongoDB Atlas', error);
        }
    }

    async getUserById(id) {
        const user = await this.usersCollection.findOne({ id });
        return user;
    }

    async getUserByEmail(email) {
        const user = await this.usersCollection.findOne({ email });
        return user;
    }

    async createUser(user) {
        const newUser = {
            id: Date.now().toString(),
            ...user,
        };
        await this.usersCollection.insertOne(newUser);
        return newUser;
    }
}

module.exports = new Users();
