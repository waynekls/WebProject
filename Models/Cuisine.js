"use strict"

class Cuisine{
    constructor(cuisine_id, cuisineType)
    {
       this.cuisine_id = cuisine_id;
       this.cuisineType =cuisineType;
    }


getcuisine_id(){
    return this.cuisine_id;
}
getcuisineType(){
    return this.cuisineType;

}
}

module.exports = Cuisine;