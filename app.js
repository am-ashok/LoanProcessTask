const express = require('express');
const app = express();
const dotenv = require('dotenv');

// const mongodb = require('mongodb');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

const port = process.env.port || 4000;
const connectDB = require('./connection/db');
dotenv.config();
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/user', authRouter);

// mongoose.connect(
//   'DB_CONNECT',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log('Connected to db!');
//   }
// );

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () =>
  console.log(`Loan Process Task running on http://localhost:${port}`)
);
module.exports = app;
