"use strict"
const { request } = require('express');
var db = require('../db-connection');
const User = require('./User')
const Feedback = require('./Feedback')


class FeedbackDB {

    // Insert new Feedback
    postFeedback(request, respond) {
        var objectFeedback = new Feedback(null,request.body.User_id, request.body.Name, request.body.Email, request.body.PhoneNumber, request.body.Feedback,null);
        var now = new Date();
        var sql = "INSERT INTO feedback (User_id,Name,Email,PhoneNumber,Feedback,TimePosted) VALUES (?,?,?,?,?,?);";
        var value = [objectFeedback.getuser_id(), objectFeedback.getname(), objectFeedback.getemail(), objectFeedback.getphoneNumber(), objectFeedback.getfeedback(),now]
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
}

module.exports = FeedbackDB;