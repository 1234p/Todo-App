const express = require("express");

const { getTodos } = require("../controllers/myTodosController");

const router = express.Router();

router.get("/", getTodos);

module.exports = router;
