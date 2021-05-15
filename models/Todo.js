const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("todo", TodoSchema);
