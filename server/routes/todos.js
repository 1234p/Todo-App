const express = require("express");

const {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
} = require("../controllers/myTodosController");

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.patch("/:id", updateTodo);
router.patch("/:id/stage", toggleTodo);

module.exports = router;
