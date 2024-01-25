const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

// global middleware
app.use([express.json(), morgan("dev"), cookieParser()]);
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1fvvkjr.mongodb.net/?retryWrites=true&w=majority`;

// const URI = "mongodb://localhost:27017"

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  client.connect();
  client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  const servicesCollection = client.db("carDoctorDB").collection("services");
  const bookingCollection = client.db("carDoctorDB").collection("booking");

  try {
    // authentication related api
    app.post("/jwt", async (req, res) => {
      const token = jwt.sign(req.body, process.env.JWT_SECRET, {
        expiresIn: "1000h",
      });
      const expireDate = new Date(Date.now() * 2);

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          expires: expireDate,
        })
        .send({ success: true });
    });
    // services api
    app.get("/services", async (req, res) => {
      const query = {};
      const option = {};
      const sortValue = req.query.sort;
      switch (sortValue) {
        case "ascending":
          option.sort = { price: 1 };
          break;
        case "descending":
          option.sort = { price: -1 };
          break;
        case "default":
          delete option.sort;
      }
      console.log(option, sortValue);
      const result = await servicesCollection.find(query, option).collation({locale: "en_US", numericOrdering: true}).toArray();
      res.send(result);
    });

    app.get("/services/:id", verifyToken, async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await servicesCollection.findOne(query);
      res.send(result);
    });

    app.post("/services", async (req, res) => {
      const result = await servicesCollection.insertOne(req.body);
      res.send(result);
    });

    app.delete("/services/:id", async (req, res) => {
      const result = await servicesCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });
    // booking list api
    app.get("/booking", verifyToken, async (req, res) => {
      const query = { email: req.query.email };
      console.log(req.user);
      if (req.decoded.email !== query.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/booking", verifyToken, async (req, res) => {
      const result = await bookingCollection.insertOne(req.body);
      res.send(result);
    });

    app.patch("/booking/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const doc = {
        $set: {
          status: req.body.status,
        },
      };
      const result = await bookingCollection.updateOne(query, doc, {
        upsert: true,
      });
      res.send(result);
    });

    app.delete("/booking/:id", async (req, res) => {
      const result = await bookingCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.get("/logout", async (req, res) => {
      res
        .clearCookie("token", { httpOnly: true })
        .send({ message: "token cleared" });
    });
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Car Doctor Server is running on port " + port);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
