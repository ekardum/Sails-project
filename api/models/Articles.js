/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
naziv: {
      type: 'string',
      required: true,
      description: 'Naziv proizvoda',
      maxLength: 120,
      example: 'MERALYS HA 0,5 mg / ml sprej za nos'
    },
atk: {
      type: 'number',
      required: true,
      description: 'atk',
      min: 1,
      max: 15,
    },
sastav: {
      type: 'string',
      required: true,
      description: 'Genericki naziv/sastav proizvoda',
      maxLength: 120,
    },
terapijsko_podrucje: {
      type: 'string',
      required: true,
      description: 'Terapijsko podrucje',
      maxLength: 120,
    },
drzava: {
      type: 'string',
      required: true,
      description: 'Drzava dostupnosti',
      maxLength: 120,
    },
pakiranje: {
      type: 'string',
      required: true,
      description: 'Velicina pakiranja',
      maxLength: 125,
    },
opis: {
      type: 'string',
      required: true,
      description: 'Opis proizvoda',
      maxLength: 500,
    },
brend: {
        model:'brendovi' 
},

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  
  validationMessages: { //hand for i18n & l10n
    naziv: {
        required: 'Naziv je obavezan'
    },
    atk: {
        required: 'Atk je obavezan'
    }
},
  datastore: 'default'

};

