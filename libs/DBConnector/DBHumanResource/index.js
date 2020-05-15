const mongoose = require('mongoose')
const dbInfo = require('../databaseInfo')

const Employee = require('./Employee')

module.exports = (connection) => {
  let db = null
  if(!connection) {
    db = mongoose
  } else {
    db = connection
  }
  return {
    _dbInfo: dbInfo(db),
    Employee: db.model('Employee', Employee)
  }
}