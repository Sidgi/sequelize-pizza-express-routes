// What do you need to require from your model.js?
const data = require('./data');
const {PizzaTable} = require('./model');
const insertSeeds = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const createTables = await PizzaTable.bulkCreate(data);
    console.log(`Insert compeleted: ${data.length} pizzas were created.`);
  } catch (err) { 
    console.log('INSERT error: ' + err.message);
  } finally {
    await process.exit();
  }
}

insertSeeds();
// Something should be called
