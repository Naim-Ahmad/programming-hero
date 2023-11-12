const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())
dotenv.config()

// database connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1fvvkjr.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    serverApi: {
        strict: true,
        version: ServerApiVersion.v1,
        deprecationErrors: true
    }
})

async function run() {
    try {
        client.connect()
        client.db('admin').command({ ping: 1 })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const coffeeCollection = client.db('coffeeDB').collection('coffee')
        const userCollection = client.db('coffeeDB').collection('user')

        app.post('/coffee', async(req, res) => {
            const newCoffee = req.body;
            const result = await coffeeCollection.insertOne(newCoffee)
            res.send(result)
        })

        app.get('/coffee', async(req, res) => {
            const result = await coffeeCollection.find().toArray()
            res.send(result)
        })

        app.get('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.findOne(query)
            res.send(result)
        })

        app.put('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const { name, chef, supplier, taste, details, category, photo, price } = req.body;
            const query = { _id: new ObjectId(id) }
            const updatedValue = {
                $set: { name, chef, supplier, taste, details, category, photo, price }
            }

            const result = await coffeeCollection.updateOne(query, updatedValue, { upsert: true })
            res.send(result)
        })

        app.delete('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.deleteOne(query)
            res.send(result)
        })

        // users route

        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.get('/user/:id', async (req, res) => {
            const result = await userCollection.findOne({ _id: new ObjectId(req.params.id) })
            res.send(result)
        })

        app.post('/user', async(req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user)
            res.send(result)
        })

        app.put('/user/:id', async (req, res) => {
            const { name, email, password } = req.body;
            const query = { _id: new ObjectId(req.params.id) }
            const updatedDoc = {
                $set: {
                    name,
                    email,
                    password
                }
            }
            const result = await userCollection.updateOne(query, updatedDoc, {upsert: true})
            res.send(result)
        })

        app.delete('/user/:id', async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })
    }
    catch (err) {
        console.log(err)
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})