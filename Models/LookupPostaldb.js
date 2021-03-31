"use strict"
const { request } = require('express');
var db = require('../db-connection');
const LookupPostal = require('./LookupPostal')

class lookupPostalDB {

    getAddress(request, respond) {

        var PostalCode = request.body.PostalCode;
        var sql = "SELECT * FROM foodreviewwebsite.lookuppostal WHERE PostalCode="+PostalCode+" limit 1";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
}

module.exports = lookupPostalDB;