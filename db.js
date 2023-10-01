const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kgoli1:Goli1234@blogapp.h2dcrqk.mongodb.net/blogapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
