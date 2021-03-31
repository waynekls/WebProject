"use strict"
const { request } = require('express');
var db = require('../db-connection');
const Review = require('../Models/Review')

class ReviewDB {

    getRestaurantReview(request, respond) {

        var restaurantId = request.body.Restaurant_id;
        var sql = "SELECT review.Review_id, restaurantbranch.Restaurant_id, restaurantbranch.BranchName, review.ReviewDate, review.Rating, review.Price, review.RestaurantReview, user.Username FROM restaurantbranch, review, user WHERE review.Restaurant_id = restaurantbranch.Restaurant_id AND user.User_id = review.User_id AND restaurantbranch.Restaurant_id =" + restaurantId;
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });

    }




    // Write new review, insert new data
        addNewReview(request, respond) {

            var objectReview = new Review(null,request.body.User_id, request.body.Restaurant_id, null, request.body.Price, request.body.Rating, request.body.RestaurantReview);
            var now = new Date();
            var sql = "INSERT INTO review (User_id,Restaurant_id,ReviewDate,Price,Rating,RestaurantReview) VALUES (?,?,?,?,?,?)";
            var value = [objectReview.getuser_id(), objectReview.getrestaurant_id(), now, objectReview.getprice(), objectReview.getrating(), objectReview.getrestaurantreview()]
            db.query(sql, value, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        }

        updateReview(request, respond) {
            var now = Date();
            var objectReview = new Review(request.body.Review_id,null, null, now, request.body.Price, request.body.Rating, request.body.RestaurantReview);
            var sql = "Update review set Price=?,Rating=?,RestaurantReview=? where Review_id =?";
            var value = [objectReview.getprice(), objectReview.getrating(), objectReview.getrestaurantreview(), objectReview.getreview_id()]
            db.query(sql, value, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        }
        getReviewInfo(request, respond) {

            var accountReviewId = request.body.Review_id;
            var sql = "SELECT review.Review_id, review.User_id, review.Restaurant_id,review.ReviewDate, review.price, review.rating, review.RestaurantReview, user.Username FROM foodreviewwebsite.review, foodreviewwebsite.user WHERE user.User_id = review.User_id AND Review_id ="+accountReviewId;
            db.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        }
        deleteReview(request, respond) {

            var accountReviewId = request.body.Review_id;
            var sql = "DELETE FROM foodreviewwebsite.review WHERE Review_id ="+accountReviewId;
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

module.exports = ReviewDB;