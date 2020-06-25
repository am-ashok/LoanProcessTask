const mongoose = require('mongoose');

const URI =
  'mongodb+srv://dbUser:dbUserPassword@cluster0-xqgtj.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('db connection successfully');
};

module.exports = connectDB;
