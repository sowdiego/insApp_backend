const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/insAppDB",{useNewUrlParser:true},(err)=>{
  if (!err){console.log('ok') }
  else {console.log('error:'+err)}


});
module.exports = mongoose;
require('./inscription.model');
require('./ecole.model');
