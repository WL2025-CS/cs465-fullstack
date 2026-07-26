const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://iveyweilin_db_user:dLXcv4WF6Q7v9p21@cluster0.ex6rxwj.mongodb.net/travlr?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI);
require('./travel');

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
