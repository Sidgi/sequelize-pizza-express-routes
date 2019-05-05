// What's missing?
// Declare and require dependencies for server.js
const logger = require('morgan');
const bodyParser = require('body-parser');
const {PizzaTable} = require('./model');
// How about over here?
const express = require('express');
const app = express();
const PORT = 8080;
// Use middleware
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));


// Test server response
app.get('/', (request, response) => response.send(`<h1 style="text-align: center;">♪ Express yo self ♪</h1>`));


// Add your routes for get (all, one), and post

app.get('/pizzas',async(req,res)=>{
  try{
    const allPizzas = await PizzaTable.findAll();
    res.send(allPizzas);
  }catch(e){
    res.status(404).json({message:e.messages})
  }
})

app.get('/pizzas/:id', async(req,res)=>{
  try{
    const id = req.params.id;
    const pizza = await PizzaTable.findByPk(id);
    res.send(pizza);
  }catch(e){
    res.status(404).json({message:e.message})
  }
})

app.post('/pizzas',async(req,res)=>{
  try{
    const pizza = await PizzaTable.create(req.body);
    res.json(pizza)
  }catch(e){
    res.send(e.message)
  }
})
// Finally, what's your server listening for?
app.listen(PORT,()=>console.log(`Listening ${PORT}`))

module.exports = app;
