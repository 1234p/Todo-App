const MyTodosModel = require("../models/MyTodos");

const getTodos = async (req, res) => {
  try {
    const data = await MyTodosModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const createTodo = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const { todo } = req.body;
    const newTodo = new MyTodosModel({ todo });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
};
