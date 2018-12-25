const mongoose = require('mongoose');
var Inscription = mongoose.model('Inscription',{
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  adresse: {
    type: String,
  },
  telephone: {
    type: String,
  },
  email: {
    type: String,
  },
  ecole: {
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
module.exports = {Inscription};
