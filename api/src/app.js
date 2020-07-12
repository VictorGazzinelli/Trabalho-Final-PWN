const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const passport = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const listsRouter = require('./routes/list');
const tasksRouter = require('./routes/task');

//rotas de Login pelo github
const logoutRouter = require('./routes/logout');
const githubRouter = require('./routes/github');

const app = express();
require('./config/github.strategy');

const pageNotFound = (req , res, next) => {
    next(createError(404));
}

const ErrorHandler = (err, req, res, next) =>{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // send error as response
    const message = err.message;
    const status = err.status || 500
    res.json({status, message });
}

// // view engine setup
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Set passport configs
app.use(require('express-session')({ secret: 'shhhh...', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lists', listsRouter);
app.use('/tasks', tasksRouter);

//rotas de Login pelo github
app.use('/logout', logoutRouter);
app.use('/auth/github', githubRouter);

app.use(pageNotFound);
app.use(ErrorHandler);


module.exports = app;