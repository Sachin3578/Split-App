// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const expenseRoutes = require('./routes/expenses');
const settlementRoutes = require('./routes/settlements');

const app = express(); 

app.use(cors());
app.use(express.json());


app.use('/expenses', expenseRoutes);
app.use('/', settlementRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch(err => console.log("MongoDB connection error:", err));
