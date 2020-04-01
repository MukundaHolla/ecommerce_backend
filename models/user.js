let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  userinfo: {
    type: String,
    trim: true
  },
  //TODO: come back
  password: {
    type: String,
    trim: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  purchases: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('User', userSchema);
