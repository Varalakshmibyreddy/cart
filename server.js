// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tattooRoutes = require('./Routes/tattooRoutes');
const dotenv = require('dotenv')

const app = express();
dotenv.config()

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/tattoos', tattooRoutes);

// MongoDB Connection
// 'mongodb://localhost:27017/tattooBooking', { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected")
}).catch((error)=>{
    console.log(`mongodb connection error ${error}`)
})

// Start Server
const PORT = 5100

app.listen(PORT,(req,res)=>{
  console.log("server connected successful")
})
