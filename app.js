// Loading env file data
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var customerRouter = require('./routes/customer');
var asstManagerRouter = require('./routes/asstManager');
var bankManagerRouter = require('./routes/bankManager');

var app = express();
const port = process.env.port || 3000;
// var port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/asstManager', asstManagerRouter);
app.use('/bankManager', bankManagerRouter);

// MongoDB Connection

const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://dbUser:dbUserPassword@cluster0-xqgtj.mongodb.net/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  console.log('db started');
  // perform actions on the collection object
  client.close();
});

// mongoDB
//   .connect(connectionString, { useUnifiedTopology: true })
//   .then((client) => {
//     console.log('Connected to Database');
//   })
//   .catch((error) => console.error(error));

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
