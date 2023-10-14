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
        await client.connect()
        await client.db('admin').command({ ping: 1 })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const coffeeCollections = client.db('coffeeDB').collection('coffee')

        app.post('/coffee', async(req, res) => {
            const newCoffee = req.body;
            const result = await coffeeCollections.insertOne(newCoffee)
            res.send(result)
        })

        app.get('/coffee', async(req, res) => {
            const result = await coffeeCollections.find().toArray()
            res.send(result)
        })

        app.get('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollections.findOne(query)
            res.send(result)
        })

        app.put('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const { name, chef, supplier, taste, details, category, photo, price } = req.body;
            const query = { _id: new ObjectId(id) }
            const updatedValue = {
                $set: { name, chef, supplier, taste, details, category, photo, price }
            }

            const result = await coffeeCollections.updateOne(query, updatedValue, { upsert: true })
            res.send(result)
        })

        app.delete('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollections.deleteOne(query)
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