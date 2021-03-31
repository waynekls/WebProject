"use strict"
const { request } = require('express');
var db = require('../db-connection');
const User = require('../Models/User')

class RestaurantDB {

    getRestaurantList(request, respond) {

        var sql = "SELECT restaurantbranch.Restaurant_id, BranchName, RestaurantImgURL1, BrandInfo, CuisineType FROM restaurantbranch,restaurantbrand,restaurantcuisine,cuisine WHERE cuisine.Cuisine_id = restaurantcuisine.Cuisine_id AND restaurantbranch.Restaurant_id = restaurantcuisine.Restaurant_id AND restaurantbrand.Brand_id =restaurantbranch.Brand_id;";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getCuisineRestaurantList(request, respond) {
        var cusineid = request.params.cuisine_id;

        var sql = "SELECT BranchName, RestaurantImgURL1, BrandInfo FROM restaurantbranch,restaurantbrand,restaurantcuisine,cuisine WHERE cuisine.Cuisine_id = restaurantcuisine.Cuisine_id and restaurantbranch.Restaurant_id = restaurantcuisine.Restaurant_id and cuisine.Cuisine_id = "+cusineid+" GROUP BY restaurantbranch.Restaurant_id";

        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    

    getRestaurantInfo(request, respond) {


        var sql = "SELECT restaurantbranch.Restaurant_id, restaurantbranch.BranchName,restaurantbranch.RestaurantImgURL2,restaurantbranch.Address,restaurantbranch.NearestMrt,restaurantbranch.OpeningHours,restaurantbranch.PhoneNumber,cuisine.CuisineType, restaurantbrand.BrandWebsite, restaurantbranch.AddressMapURL FROM restaurantbranch, cuisine , restaurantcuisine, restaurantbrand WHERE restaurantbranch.Brand_id = restaurantbrand.Brand_id AND restaurantcuisine.Restaurant_id = restaurantbranch.Restaurant_id AND restaurantcuisine.Cuisine_id = cuisine.Cuisine_id";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });

    }

    getAverage(request, respond) {

        var restaurantId = request.body.Restaurant_id;
        var sql = "SELECT AVG(review.rating),AVG(review.price) FROM restaurantbranch,review WHERE restaurantbranch.Restaurant_id=" + restaurantId;
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });

    }

    getRestaurantReview(request, respond) {

        var restaurantId = request.body.Restaurant_id;
        var sql = "SELECT restaurantbranch.BranchName, review.ReviewDate, review.Rating, review.Price, review.RestaurantReview, user.Username FROM restaurantbranch, review, user WHERE review.Restaurant_id = restaurantbranch.Restaurant_id AND user.User_id = review.User_id AND restaurantbranch.Restaurant_id =" + restaurantId;
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

module.exports = RestaurantDB;