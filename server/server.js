const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes)
app.use(cors());

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const port = 8000

app.listen(port, console.log(`running on port ${port} `));