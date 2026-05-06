const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: String,
  stage: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
});

module.exports = mongoose.model("MyTodos", todoSchema, "MyTodos");
