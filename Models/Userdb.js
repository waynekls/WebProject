"use strict"
const { request } = require('express');
var db = require('../db-connection');
const User = require('../Models/User');
const ValidationResult = require('../Models/ValidationResult');


class UserDB {
    // Login
    getPassword(request, respond) {

        var accountUsername = request.body.username;
        var sql = "SELECT Password, User_id FROM foodreviewwebsite.user WHERE Username = '"+accountUsername+"'";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    // Register new account, insert new data
    register(request, respond) {
        var now = Date();
        var objectUser = new User(null, request.body.Username,request.body.Password,request.body.FirstName,request.body.LastName,request.body.Gender,request.body.Email,request.body.PhoneNumber,request.body.Country, request.body.Address ,request.body.PostalCode,request.body.ProfilePictureUrl,null,request.body.isActive);

        //To do add validation
        // if (objectUser.getemail().includes("@") )
         var sql = "INSERT INTO user (Username,Password,FirstName,LastName,Gender,Email,PhoneNumber,Country,Address,PostalCode,ProfilePictureUrl,AccountCreationDate,isActive) VALUES (?,?,?,?,?,?,?,?,?,?,?,NOW(),?)";
         var value = [objectUser.getUsername(), objectUser.getPassword(), objectUser.getfirstName(), objectUser.getlastName(), objectUser.getgender(), objectUser.getemail(), objectUser.getphoneNumber(), objectUser.getcountry(), objectUser.getaddress(), objectUser.getpostalCode(), objectUser.getprofilePictureUrl(),now, objectUser.getisActive()];
        db.query(sql, value, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

        // Register new account, insert new data
        validateResults(request, respond) {

            var sql = "CALL ValidateNewUser ('"+request.body.Username+"','"+request.body.Email+"','"+request.body.PhoneNumber+"')";
            db.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        }
    

    updateAccount(request, respond) {

        var objectUser = new User(request.body.User_id,request.body.Username,request.body.Password,request.body.firstname,request.body.lastname,request.body.gender,request.body.Email,request.body.PhoneNumber,request.body.Country,request.body.Address,request.body.PostalCode,request.body.profilePictureUrl,request.body.accountCreationDate,request.body.isActive);
        var now = Date();
        var sql = "UPDATE user SET Email = ?, PhoneNumber = ?,Country=?, Address = ?, PostalCode =? WHERE User_id = ?";
        var value = [objectUser.getemail(), objectUser.getphoneNumber(), objectUser.getcountry(), objectUser.getaddress(), objectUser.getpostalCode(), objectUser.getUser_id()]
        db.query(sql, value, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    getUserInfo(request, respond) {

        var accountUserId = request.body.User_id;
        var sql = "SELECT * FROM foodreviewwebsite.user WHERE User_id ="+accountUserId;
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    deleteUser(request, respond) {

        var accountUserId = request.body.User_id;
        var sql = "DELETE FROM foodreviewwebsite.user WHERE User_id ="+accountUserId;
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

module.exports = UserDB;