"use strict"
 
const restaurantdb = require('../Models/Restaurantdb');
 
var restaurantDBObject = new restaurantdb();
 
function routeRestaurant(app){
    app.route('/Restaurantlist')
        .get(restaurantDBObject.getRestaurantList)
        .put(restaurantDBObject.getCuisineRestaurantList);
    app.route('/RestaurantMain')
        .get(restaurantDBObject.getRestaurantInfo)
        .put(restaurantDBObject.getAverage);
}


module.exports = {routeRestaurant};