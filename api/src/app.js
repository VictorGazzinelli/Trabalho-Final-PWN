const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

const app = express();

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
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(pageNotFound);
app.use(ErrorHandler);


module.exports = app;