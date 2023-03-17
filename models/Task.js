const mongoose = require("mongoose");

/* 
  Setup the structure for the document (table) - avoid randomly added key:value pairs
  Only properties specified in schema will be passed to database
*/
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must porovide name"], // rquired property
    trim: true, // trimm value
    maxlength: [20, "name can not be more than 20 craracters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Setup a model - using the model we can get, update, create the documents
// First argument is a name of collection for what model is used for

// We can set validators and trims
module.exports = mongoose.model("Task", TaskSchema);
