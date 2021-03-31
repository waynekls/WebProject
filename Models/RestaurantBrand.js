"use strict"

class RestaurantBrand{
    constructor(brand_id, brandName, brandWebsite,brandInfo)
    {
       this.brand_id = brand_id;
       this.brandName =brandName;
       this.brandWebsite = brandWebsite;
       this.brandInfo = brandInfo;
    }
    getbrand_id(){
        return this.brand_id;
    }
    getbrandName(){
        return this.brandName;
    }
    getbrandWebsite(){
        return this.brandWebsite;
    }
    getbrandInfo(){
        return this.brandInfo;
    }

}

module.exports = RestaurantBrand;