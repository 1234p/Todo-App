// Load Environmental Variables
const dotenv = require('dotenv')
dotenv.config()

// Enable CORS
const cors = require('cors')
const corsConfig = require('./config/cors.json')

// Initialize Express App
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(cors(corsConfig))

app.listen(PORT, () => {
  console.log("server started")
})