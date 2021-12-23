const express = require('express');
const app = express();
app.use(express.json());
const ping=require('./routes/pingRoute');
const user=require('./routes/userRoute');
app.use("/api",ping)
app.use("/api",user)
module.exports = app;