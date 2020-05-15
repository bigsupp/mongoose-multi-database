const mongoose = require('mongoose')

const db = mongoose.createConnection('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
})

const DBHumanResource = require('./DBHumanResource')
const DBInventory = require('./DBInventory')

exports.HumanResource = DBHumanResource(db.useDb('db-test-humanresource'))
exports.Inventory = DBInventory(db.useDb('db-test-inventory'))