const mongoose = require("mongoose");

/* 
  Setup the structure for the document (table) - avoid randomly added key:value pairs
  Only properties specified in schema will be passed to database
*/
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// Setup a model - using the model we can get, update, create the documents
// First argument is a name of collection for what model is used for
module.exports = mongoose.model("Task", TaskSchema);
