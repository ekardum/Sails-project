/**
 * ObavijestiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
  
module.exports = {

    obavijesti: function(req,res){
      Obavijesti.find({}).exec(function(err, obavijesti){
        if(err){
          res.send(500, {error: 'Database error'});
        }
        res.view('pages/obavijesti',{obavijesti:obavijesti});
      });
    },

};
