const MyTodosModel = require("../models/MyTodos");

const getTodos = async (req, res) => {
  try {
    const data = await MyTodosModel.find();
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const createTodo = async (req, res) => {
  try {
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
