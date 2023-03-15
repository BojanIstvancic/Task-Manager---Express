const mongoose = require("mongoose");
// for easier development we will be using mongoose API
// we have to connect the database

const connectionString =
  "mongodb+srv://bojan:1234@nodeexpressprojects.a7wexf1.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

/*
  We are using Atlas MongoDB Cloud

  UPDATE THIS STRING TO USE YOUR OWN CREDENTIALS
  "mongodb+srv://bojan:<password>@nodeexpressprojects.a7wexf1.mongodb.net/?retryWrites=true&w=majority";
  user - bojan  
  password - 1234
  database name <- ? -  03-TASK-MANAGER - will be created automatically if doesn't exist already (when we start adding items)
*/

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the db..."))
  .catch((error) => console.log(error));
