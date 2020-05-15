const mongoose = require('mongoose')
const dbInfo = require('../databaseInfo')

const Asset = require('./Asset')

module.exports = (connection) => {
  let db = null
  if(!connection) {
    db = mongoose
  } else {
    db = connection
  }
  return {
    _dbInfo: dbInfo(db),
    Asset: db.model('Asset', Asset)
  }
}