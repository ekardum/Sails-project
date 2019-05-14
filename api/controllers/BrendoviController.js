/**
 * BrendoviController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var express = require('express');
var csv = require('express-csv');
  
module.exports = {

    brendovi: function(req,res){
      Brendovi.find({}).exec(function(err, brendovi){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.view('pages/brendovi',{brendovi:brendovi});
      });
    },
    add: function(req,res){
      Brendovi.find({}).exec(function(err, brendovi){
        if(err){
          res.send(500, {error: 'Database error'});
        }
      res.view('pages/brendoviAdd',{brendovi:brendovi});
    });
    },
    create: async function(req, res){ 
      var naziv = req.body.naziv;
      var datum_nastanka = req.body.datum_nastanka;

      await Brendovi.create({naziv:naziv, datum_nastanka:datum_nastanka}).exec(function(err){
        if(err){
          res.status(500).send({error: 'Database error'});
        }
        req.addFlash('success', 'Brend uspješno dodan!');
        res.redirect('/brendovi/brendovi');
      });
      
    },
    delete: async function(req,res){
      await Brendovi.destroy({id:req.params.id}).exec(function(err){
        if(err){
          res.send(500, {error: 'Database error'});
        }

        res.redirect('/brendovi/brendovi');

      });

      return false;
    },
    edit: function(req,res){
      Brendovi.findOne({id:req.params.id}).exec(function(err, brend){
        if(err){
          res.send(500, {error: 'Database error'});
        }

        res.view('pages/brendoviEdit', {brend:brend});
      });
    },
    update: async function(req, res){
      var naziv = req.body.naziv;
      var datum_nastanka = req.body.datum_nastanka;

      await Brendovi.update({id:req.params.id},{naziv:naziv, datum_nastanka:datum_nastanka}).exec(function(err){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.redirect('/brendovi/brendovi');
      });

      return false;
    },
    csv: function(req,res){
      Brendovi.find({}).exec(function(err, brendovi){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.attachment('Brendovi.csv');
        res.csv(brendovi);
      });

    },

};
