var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');

var app = express();

// Gets the Username and Password 
const MONGO_URI = process.env.MONGO_URI;
console.log('MONGO_URI ', MONGO_URI)
// Creating the connect function
const connectDB = async () => {
    await mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
        .catch((e) => {
            console.log(e.message);// Logs out the error message if it encounters any.
        });
};

// Calling the Connect Function
connectDB();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
