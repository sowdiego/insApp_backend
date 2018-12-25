const express =require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Inscription} =  require('../models/inscription.model');

router.get('/', (req, res) => {
  Inscription.find((err, docs)=>{
    if (!err) { res.send(docs); }
    else {console.log('error in retriving inscriptions: ' + json.stringfy(err,indefined,2));  }
  });
});

router.get('/:id', (req,res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('no record whith given id : ${req.params.id}')
    Inscription.findById(req.params.id, (err, doc)=>{
      if (!err) { res.send(doc); }
      else {console.log('error in retriving inscription: ' + json.stringfy(err,indefined,2));}
    });
  });

router.post('/', (req,res) => {
  var ins = new Inscription({
    nom : req.body.nom,
    prenom : req.body.prenom,
    adresse : req.body.adresse,
    telephone : req.body.telephone,
    email : req.body.email,
    ecole: req.body.ecole,
  });
  ins.save((err, doc) => {
    if (!err) { res.send(doc); }
    else {console.log('error in inscription save: ' + json.stringfy(err,indefined,2));}
  });
});

router.put('/:id', (req,res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('no record whith given id : ${req.params.id}');

    var ins = {
      nom : req.body.nom,
      prenom : req.body.prenom,
      adresse : req.body.adresse,
      telephone : req.body.telephone,
      email : req.body.email,
    };
    Inscription.findByIdAndUpdate(req.params.id, {$set:ins},{new: true},(err, doc) => {
      if (!err) { res.send(doc); }
      else {console.log('error in inscription update: ' + json.stringfy(err,indefined,2));}
    });

  });

  router.delete('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send('no record whith given id : ${req.params.id}')
      Inscription.findByIdAndRemove(req.params.id, (err, doc)=>{
        if (!err) { res.send(doc); }
        else {console.log('error in inscription delete : ' + json.stringfy(err,indefined,2));}
      });
    });

module.exports = router;
