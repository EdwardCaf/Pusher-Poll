const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose connect
mongoose.connect('mongodb://edcaf:edcaf@ds225038.mlab.com:25038/pusherpolledcaf').then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log(err));