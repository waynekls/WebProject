"use strict"
 
const postaldb = require('../Models/LookupPostaldb');
 
var lookuppostalDBObject = new postaldb();
 
function routePostal(app){
    app.route('/Registrations')
        .put(lookuppostalDBObject.getAddress)

}

module.exports = {routePostal};