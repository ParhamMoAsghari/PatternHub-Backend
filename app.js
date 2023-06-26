const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const patternsRouter = require('./routes/patterns');
const passport = require("./passport");
const cors = require("cors");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(cors({
    origin: '*', // Replace with the allowed origin(s)
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true, // Set to true if you're using cookies or authentication headers
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patterns', patternsRouter)

module.exports = app;
