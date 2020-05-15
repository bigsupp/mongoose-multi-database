const DB = require('./libs/DBConnector')

const test = async () => {
  console.log(`\n---- DB HumanResource ----\n`)
  console.log('database info: ', DB.HumanResource._dbInfo);
  console.log('existing Employee: ', await DB.HumanResource.Employee.findOne().exec());
  console.log('delete all Employee', await DB.HumanResource.Employee.deleteMany())
  console.log('insert new Employee', await DB.HumanResource.Employee.create({
    name: 'alice'
  }))
  console.log('insert new Employee', await DB.HumanResource.Employee.create({
    name: 'bob'
  }))
  console.log('query Employee: ', await DB.HumanResource.Employee.findOne().exec());
  console.log('total Employee: ', await DB.HumanResource.Employee.countDocuments().exec());
  console.log(`\n---- end ----\n`)
  //
  console.log(`\n---- DB Inventory ----\n`)
  console.log('database info: ', DB.Inventory._dbInfo);
  console.log('existing Asset: ', await DB.Inventory.Asset.findOne().exec());
  console.log('delete all Asset', await DB.Inventory.Asset.deleteMany())
  console.log('insert one Asset', await DB.Inventory.Asset.create({
    name: 'webex board 55"'
  }))
  console.log('query Asset: ', await DB.Inventory.Asset.findOne().exec());
  console.log('total Asset: ', await DB.Inventory.Asset.countDocuments().exec());
  console.log(`\n---- end ----\n`)
  //
  process.exit(0)
}

test()