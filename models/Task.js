const mongoose = require("mongoose");

// Setup the structure for the document (table)
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// Setup a model - using the model we can get, update, create the documents
module.exports = mongoose.model("Task", TaskSchema);
