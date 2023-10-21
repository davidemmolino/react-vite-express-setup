const express = require("express"),
  PORT = 5000,
  app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://davidemmolino:Henney123@cluster0.zf0kqs2.mongodb.net/?retryWrites=true&w=majority";

// TODO: need to create a db schema!
// TODO: how do I query the db?
// TODO: how do I put all this dbConn logic into its own module?
// TODO: use postman !
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
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const logger = function (req, res, next) {
  console.log('LOGGED')
  next()
}   

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(logger);  
app.use(requestTime);

app.get("/api/v1", (req, res) => {
  const responseText = `requested at: ${req.requestTime}`
  res.send(responseText);
});

app.post("/api/v1", jsonParser, (req, res) => {
  console.log('req body', req.body)
  res.send("updated todo list");
});

// global error handler 
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'There was an error',
    status: 500,
    message: { err: 'An error has occured' }
  }
  // merge the two objs, so the error either is 500 code or if another code is merged into it then we send that to the client
  const errorObj = { ...defaultError, ...err };
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
