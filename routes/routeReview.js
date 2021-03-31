"use strict"
 
const reviewdb = require('../Models/Reviewdb');
 
var reviewDBObject = new reviewdb();
 
function routeReview(app) {
    app.route('/RestaurantReview')
        .post(reviewDBObject.getRestaurantReview);
    app.route('/UpdateRestaurantReview')
        .put(reviewDBObject.updateReview)
        .post(reviewDBObject.getReviewInfo)
        .delete(reviewDBObject.deleteReview);
    app.route('/newRestaurantReview')
        .post(reviewDBObject.addNewReview);
}


module.exports = {routeReview};