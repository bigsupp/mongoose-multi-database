const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: String,
  type: String,
  location: String
})