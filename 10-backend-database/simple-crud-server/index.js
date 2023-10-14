const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// naimahmad201103
// xbENZH1Tr5gFmjL2


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://naimahmad201103:xbENZH1Tr5gFmjL2@cluster0.ptphu0l.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const usersCollection = client.db('usersDB').collection('users')

    app.get('/users', async (req, res) => {
      const users =  usersCollection.find()
      const result = await users.toArray()
     res.send(result)
    })

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await usersCollection.findOne(query)
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const insertUser = await usersCollection.insertOne(newUser)
      console.log(insertUser);
      res.send(insertUser)
    })

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) }
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        }
      }
      const result = await usersCollection.updateOne(filter, updatedUser)
      res.send(result)
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id
      const deleteInfo = await usersCollection.deleteOne({ _id: new ObjectId(id) })
      res.send(deleteInfo)
    })
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, ()=> console.log(`Server is running on port ${port}`))