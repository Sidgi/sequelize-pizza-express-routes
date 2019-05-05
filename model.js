// Require sequelize
const Sequelize = require('sequelize');

// Instantiate your database with sequelize
const db = new Sequelize({
  database:'pizza_express_hw',
  dialect:'postgres',
  define: {
    underscored:true,
    returning: true
  }
})

// Define your pizza table with three attributes as type string: 
// flavor, description, location

const PizzaTable = db.define('pizza',{
  flavor:{
    type:Sequelize.STRING,
    allowNull:false,
    defaultValue:'delicious'
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false,
    defaultValue: 'Bla bla bla'
  },
  location:{
    type:Sequelize.STRING,
    allowNull:false,
    defaultValue: 'NY'
  }
})

// Finally, export both your db and table

module.exports = {
  db,
  PizzaTable
}