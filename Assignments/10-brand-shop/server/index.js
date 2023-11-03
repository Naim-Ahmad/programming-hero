const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000

// middleware 
app.use(cors())
app.use(express.json())
dotenv.config()

// mongodb uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1fvvkjr.mongodb.net/?retryWrites=true&w=majority`;

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
   
     client.connect();
     client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    const brandsCollection = client.db('TechPulsePro').collection('brands')
    const productsCollection = client.db('TechPulsePro').collection('products')
    const cartsCollection = client.db('TechPulsePro').collection('carts')

    // brands route
    app.get('/brands', async (req, res) => {
      const result = await brandsCollection.find().toArray()
      res.send(result)
    })

    // products route
    // get all products by company name / brand name
    app.get('/products/:company', async (req, res) => {
      const query = {brandName: req.params.company}
      const result = await productsCollection.find(query).toArray()
      res.send(result)
    })

    // get a product
    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query)
      res.send(result)
    })
  
    // insert a product
    app.post('/products', async (req, res) => {
      const product = req.body;
      const result = await productsCollection.insertOne(product)
      res.send(result)
    })
    // update a product
    app.put('/products/:id', async (req, res) => {
      const id = req.params.id;
      const { brandName, name, image, type, price, rating } = req.body;
      const query = { _id: new ObjectId(id) }
      const doc = {
        $set: {
          brandName,
          name, 
          image, 
          type,
          price, rating
        }
      }
      const result = await productsCollection.updateOne(query, doc, {upsert: true})
      res.send(result)
    })

    // carts route
    app.get('/carts/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email }
      const result = await cartsCollection.find(query).toArray()
      res.send(result)
    })

    app.post('/carts', async (req, res) => {
      const cart = req.body;
      const result = await cartsCollection.insertOne(cart)
      res.send(result)
    })

    app.delete('/carts/:id', async (req, res) => {
      const result = await cartsCollection.deleteOne({ _id: new ObjectId(req.params.id) })
      res.send(result)
    })
      
    
    } catch (err) {
        console.log(err)
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Technology and Electronics server is running on port ' + port)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})