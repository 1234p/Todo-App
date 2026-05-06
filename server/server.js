// Import Required Modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load Environmental Variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Enable CORS
const corsConfig = require("./config/cors.json");

// Initialize Express App
const app = express();

// Connect to MongoDB
mongoose.connect(MONGO_URL).then(() => {
  console.log(`Successfully connected to Mongodb with the url: ${MONGO_URL}`);
});

// Middlewares
app.use(express.json());
app.use(cors(corsConfig));

app.listen(PORT, () => {
  console.log("server started");
});
