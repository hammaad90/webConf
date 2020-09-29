const mongoose = require('mongoose');
const dotenv 				= require('dotenv').config();
const mongoUri = process.env.MONGO

const connect = function () {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
};

module.exports = {
  connect: connect
};
