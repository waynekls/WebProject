"use strict"

class Review{
    constructor(Review_id, User_id, Restaurant_id,ReviewDate,Price,Rating,RestaurantReview)
    {
       this.Review_id = Review_id;
       this.User_id =User_id;
       this.Restaurant_id = Restaurant_id;
       this.ReviewDate = ReviewDate;
       this.Price = Price;
       this.Rating = Rating;
       this.RestaurantReview = RestaurantReview;

    }

        getreview_id(){
        return this.Review_id;
        }
    
        getuser_id(){
            return this.User_id;
        }
        getrestaurant_id(){
            return this.Restaurant_id;
        }
        getreviewdate(){
            return this.ReviewDate;
        }
        getprice(){
            return this.Price;
        }
        getrating(){
            return this.Rating;
        }
        getrestaurantreview(){
            return this.RestaurantReview;
        }


        setreview_id(Review_id){
            this.Review_id = Review_id;
        }
        setuser_id(User_id){
            this.User_id = User_id;
        }
        setrestaurant_id(Restaurant_id){
            this.Restaurant_id = Restaurant_id;
        }
        setreviewkDate(ReviewDate){
            this.ReviewDate = ReviewDate;
        }
        setprice(Price){
            this.Price = Price;
        }
        setgetrating(Rating){
            this.Rating = Rating;
        }
        setrestaurantreview(RestaurantReview){
            this.RestaurantReview = RestaurantReview;
        }
}

module.exports = Review;