const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: String,
  unit: String
})