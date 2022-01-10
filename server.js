//requiering express and initializing the app:
const app = require("express")();
//requiering the cors middleware:
const cors = require("cors");

const PORT = 5001; //we will use port 5001

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://tristan:UcWtV4r9IljVDaCW@cluster0.tdpag.mongodb.net/notesDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); //telling express to use the cors middleware
app.use("/", require("./routes/noteRoute"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  //listen to the port we chose above
  //print to the console that the server is listening
  console.log("listening to port: " + PORT);
});
