// What do you need to require from your model.js for resetDb.js?
const {db} = require('./model');
const resetDb = async ()=>{
  try{
   await db.sync({force:true});
    console.log(' synced');
  }catch(e){
    console.log(e)
  }finally{
    await process.exit();
  }
}
resetDb();
// Call something perhaps?
