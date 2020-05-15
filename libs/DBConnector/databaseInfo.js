module.exports = (db) => {
  const {
    name,
    host,
    port,
    readyState
  } = db
  return {
    name,
    host,
    port,
    readyState,
    readyStateText: db.states[readyState]
  }
}