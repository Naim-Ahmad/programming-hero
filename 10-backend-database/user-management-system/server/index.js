const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())
dotenv.config()

app.get('/', (req, res) => {
    res.send('User Management Server is Running...')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1fvvkjr.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
      await client.connect();
      
      const usersCollection = client.db('usersDB').collection('users')

      app.get('/users', async (req, res) => {
          const result = await usersCollection.find().toArray();
          res.send(result)
      })

      app.get('/user/:id', async (req, res) => {
          const query = {_id: new ObjectId(req.params.id)}
          const result = await usersCollection.findOne(query)
          res.send(result)
      })

      app.post('/user', async (req, res) => {
          const user = req.body;
          const result = await usersCollection.insertOne(user)
          res.send(result)
      })

      app.put('/user/:id', async (req, res) => {
          const { name, email, gender, status } = req.body;
          
          const query = { _id: new ObjectId(req.params.id) }
          const updatedDoc = {
              $set: {
                  name,
                  email,
                  gender,
                  status
              }
          }
          const result = await usersCollection.updateOne(query, updatedDoc, { upsert: true })
          res.send(result)
      })

      app.delete('/user/:id', async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) }
          const result = await usersCollection.deleteOne(query)
          res.send(result)
      })

      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      
  } catch (err) {
      console.log(err)
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})