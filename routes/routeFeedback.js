"use strict"
 
const feedbackdb = require('../Models/Feedbackdb');
 
var feedbackDBObject = new feedbackdb();
 
function routeFeedback(app){
    app.route('/feedback')
        .post(feedbackDBObject.postFeedback)
        .put(feedbackDBObject.getUserInfo);//Retrieve Account Data
}

module.exports = {routeFeedback};