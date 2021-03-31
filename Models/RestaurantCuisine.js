"use strict"

class RestaurantCuisine{
    constructor(restaurantCuisine_id, cuisine_id, restaurant_id)
    {
       this.restaurantCuisine_id = restaurantCuisine_id;
       this.Cuisine_id =cuisine_id;
       this.restaurant_id = restaurant_id;
    }
    getrestaurantCuisine_id(){
        return this.restaurantCuisine_id;
    }
    getcuisine_id(){
        return this.cuisine_id;
    }
    getrestaurant_id(){
        return this.restaurant_id;
    }
}

module.exports = RestaurantCuisine;