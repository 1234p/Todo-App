const express = require("express");
const MyTodosModel = require("../models/MyTodos");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await MyTodosModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

module.exports = router;
