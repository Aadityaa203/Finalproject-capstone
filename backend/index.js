//dependencies
const express = require('express');//big-ol' application framework
const morgan = require('morgan'); //funny .get/.post/etc logger middleware
const mongoose = require('mongoose');//database management

//dotenv specific dependency calls
require('dotenv').config();//.env file management

//routes
const attractionRoutes = require('./routes/attractions')

const app = express();
const port = process.env.PORT || 5000; //falsy .env ports (0, undefined, false, etc) default to 5000

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.URI)
    .then(result => { app.listen(port); console.log("Listening on port", port); })
    .catch(err => console.log(err));

app.get('/', (req, res) => { console.log("Got a get"); res.send("get got"); }); //testing garbo

app.use('/attractions', attractionRoutes);
