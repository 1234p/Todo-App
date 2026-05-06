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

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { newTodo } = req.body;

    const todo = await MyTodosModel.findById(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.todo = newTodo
    const updatedTodo = await todo.save();

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update todo" });
  }
};

const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await MyTodosModel.findById(id);
    
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.stage = todo.stage === "complete" ? "incomplete" : "complete";
    const updatedTodo = await todo.save();

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to toggle todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
};
