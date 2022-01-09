//requiering express and initializing the app:
const app = require('express')(); 
//requiering the cors middleware:
const cors = require('cors');

const PORT = 5001; //we will use port 5001

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tristan:UcWtV4r9IljVDaCW@cluster0.tdpag.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());//telling express to use the cors middleware

app.get('/', (req,res)=>{ //listen to a get request
  client.connect(async err => {
    const collection = client.db("test").collection("devices");
    //perform actions on the collection object
    //find everything in the collection and turn it into an array:
    const data = await collection.find().toArray();
    
    //now we turn our data into a string and send it over to the client
    //remember that our data is an array of objects (in this case only one object) but JSON.stringify turns it into a string 
    res.send(JSON.stringify(data));
  });
})

app.listen(PORT, ()=>{ //listen to the port we chose above
    //print to the console that the server is listening
    console.log("listening to port: " + PORT);
})



