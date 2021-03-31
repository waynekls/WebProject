"use strict"

class RestaurantBranch{
    constructor(restaurant_id, brand_id, branchName, address, addressMapURL, nearestMrt, openingHours, phoneNumber, restaurantImgurl1,restaurantImgurl2,restaurantImgurl3)
    {
        this.restaurant_id = restaurant_id;
        this.brand_id = brand_id;
        this.branchName =branchName;
        this.address = address;
        this.addressMapURL = addressMapURL;
        this.nearestMrt = nearestMrt;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.restaurantImgurl1 = restaurantImgurl1;
        this.restaurantImgurl2 = restaurantImgurl2;
        this.restaurantImgurl3 = restaurantImgurl3;
    }

        getrestaurant_id(){
            return this.restaurant_id;
        }
        getbrand_id(){
            return this.brand_id;
        }
        getbranchName(){
            return this.branchName;
        }
        getaddress(){
            return this.address;
        }
        getaddressMapURL(){
            return this.addressMapURL;
        }
        getnearestMrt(){
            return this.nearestMrt;
        }
        getopeningHours(){
            return this.openingHours;
        }
        getphoneNumber(){
            return this.phoneNumber;
        }
        getrestaurantImgurl1(){
            return this.restaurantImgurl1;
        }
        getrestaurantImgurl2(){
            return this.restaurantImgurl2;
        }
        getrestaurantImgurl3(){
            return this.restaurantImgurl3;
        }




        setrestaurant_id(restaurant_id){
            this.restaurant_id = restaurant_id;
        }
        setbrand_id(brand_id){
            this.brand_id = brand_id;
        }
        setbranchName(branchName){
            this.branchName = branchName;
        }
        setaddress(address){
            this.address = address;
        }
        setaddressMapURL(addressMapURL){
            this.addressMapURL = addressMapURL;
        }
        setnearestMrt(nearestMrt){
            this.nearestMrt = nearestMrt;
        }
        setopeningHours(openingHours){
            this.openingHours = openingHours;
        }
        setphoneNumber(phoneNumber){
            this.phoneNumber = phoneNumber;
        }
        setrestaurantImgurl1(restaurantImgurl1){
            this.restaurantImgurl1 = restaurantImgurl1;
        }
        setrestaurantImgurl2(restaurantImgurl2){
            this.restaurantImgurl2 = restaurantImgurl2;
        }
        setrestaurantImgurl3(restaurantImgurl3){
            this.restaurantImgurl3 = restaurantImgurl3;
        }
}

module.exports = RestaurantBranch;