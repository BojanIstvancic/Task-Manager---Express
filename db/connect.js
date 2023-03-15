const mongoose = require("mongoose");
// we have to connect the database
// for easier development we will be using mongoose API

/*
  We are using Atlas MongoDB Cloud

  UPDATE THIS STRING TO USE YOUR OWN CREDENTIALS
  "mongodb+srv://bojan:<password>@nodeexpressprojects.a7wexf1.mongodb.net/?retryWrites=true&w=majority";
  user - in Atlas MongoDB Cloud
  password - in Atlas MongoDB Cloud
  database name <- ? - in Atlas MongoDB Cloud - will be created automatically if doesn't exist already (when we start adding items)
*/

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

// we return a promise here

module.exports = connectDB;
