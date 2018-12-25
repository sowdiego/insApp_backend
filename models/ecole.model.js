const mongoose = require('mongoose');

var Ecole = mongoose.model('Ecole',{
  nom: {
    type: String,

  },
  description: {
    type: String,

  },
  created: {
    type: Date,
    select: false,
    required: true,
    default: Date.now()
  },
  updated: {
    type: Date,
    select: false
  }
});
module.exports = {Ecole};
