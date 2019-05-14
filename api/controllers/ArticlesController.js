/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var express = require('express');
var csv = require('express-csv');
//var Papa = require('papaparse');
//var app = module.exports = express.createServer();
  
module.exports = {
   /* list:function(req,res){
      res.view('pages/list');
    }*/

    list: function(req,res){
      Articles.find({}).exec(function(err, articles){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.view('pages/list',{articles:articles});
        console.log(articles);
      });
    },
    
    add: function(req,res){
      Brendovi.find({}).exec(function(err, brendovi){
        if(err){
          res.send(500, {error: 'Database error'});
        }
      res.view('pages/add',{brendovi:brendovi});
    });
    },
    create: async function(req, res){ 
      var naziv = req.body.naziv;
      var atk = req.body.atk;
      var sastav = req.body.sastav;
      var terapijsko_podrucje = req.body.terapijsko_podrucje;
      var drzava = req.body.drzava;
      var pakiranje = req.body.pakiranje;
      var opis = req.body.opis;
      var brend = req.body.brend;

      await Articles.create({naziv:naziv, atk:atk, sastav:sastav, terapijsko_podrucje:terapijsko_podrucje, drzava:drzava, pakiranje:pakiranje, opis:opis, brend:brend}).exec(function(err){
        if(err){
          //res.send(500, {error: 'Database error'});
          res.status(500).send({error: 'Database error'});
        }
        req.addFlash('success', 'Proizvod uspješno dodan!');
        res.redirect('/articles/list');
      });
      
    },
    delete: async function(req,res){
      await Articles.destroy({id:req.params.id}).exec(function(err){
        if(err){
          res.send(500, {error: 'Database error'});
        }

        res.redirect('/articles/list');

      });

      return false;
    },
    edit: function(req,res){
      Articles.findOne({id:req.params.id}).exec(function(err, article){
        if(err){
          res.send(500, {error: 'Database error'});
        }

        res.view('pages/edit', {article:article});
        console.log({article:article});
      });
    },
    update: async function(req, res){
      var naziv = req.body.naziv;
      var atk = req.body.atk;
      var sastav = req.body.sastav;
      var terapijsko_podrucje = req.body.terapijsko_podrucje;
      var drzava = req.body.drzava;
      var pakiranje = req.body.pakiranje;
      var opis = req.body.opis;
      var brend = req.body.brend;

      await Articles.update({id:req.params.id},{naziv:naziv, atk:atk, sastav:sastav, terapijsko_podrucje:terapijsko_podrucje, drzava:drzava, pakiranje:pakiranje, opis:opis, brend:brend}).exec(function(err){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.redirect('/articles/list');
      });

      return false;
    },
    csv: function(req,res){
      Articles.find({}).exec(function(err, articles){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.attachment('Proizvodi.csv');
        res.csv(articles);
      });

    },
    /*csv: function(req,res){


        var csv = Papa.unparse([
          ["1-1", "1-2", "1-3"],
          ["2-1", "2-2", "2-3"]
        ],{download: true});
        
     

    },*/

};

