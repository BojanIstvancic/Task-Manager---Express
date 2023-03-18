const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// dotenv - dependacy so we can access ENV FILES

// middleware
// express.json() - to get a payload in request body (post)
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  /*
    create a start function cause we want to kill the server if
    we do not connect to the DB
  */
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
