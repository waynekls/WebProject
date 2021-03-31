function getRestaurantInfo() {

    var request = new XMLHttpRequest();
    request.open('GET', "/RestaurantMain", true);
    request.setRequestHeader("Content-Type", "application/json");

    //This function will be called when data returns from the web api
    request.onload = function () 
    {
        //get all the restaurant records into our  array
        restaurant_array = JSON.parse(request.responseText);
        var lsrestaurant_id = localStorage.getItem("restaurant_id");
        getRestaurantReviewInfo();
        displayRestaurantMain(lsrestaurant_id);
    };
    //This command starts the calling of the Restaurant web api
    request.send();
}


//This function is to display the restaurant 
function displayRestaurantMain(lsrestaurant_id) {

    totalRestaurant = restaurant_array.length;
    for (var count = 0; count < totalRestaurant; count++) {

        if (restaurant_array[count].Restaurant_id == lsrestaurant_id) {

            var BranchName = restaurant_array[count].BranchName;
            var RestaurantImgURL2 = restaurant_array[count].RestaurantImgURL2;
            var Address = restaurant_array[count].Address;
            var NearestMrt = restaurant_array[count].NearestMrt;
            var OpeningHours = restaurant_array[count].OpeningHours;
            var PhoneNumber = restaurant_array[count].PhoneNumber;
            var CuisineType = restaurant_array[count].CuisineType;
            var BrandWebsite = restaurant_array[count].BrandWebsite;
            var RestaurantMap = restaurant_array[count].AddressMapURL;

            RestaurantMap ="<iframe src=\"https://www.google.com/maps/embed?pb="+RestaurantMap+"\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";

            document.getElementById("restaurantTable").innerHTML = "<img class='center' src='img" + RestaurantImgURL2 + "' />";
            document.getElementById("arrayBranchName").innerHTML = BranchName;
            document.getElementById("arrayAddress").innerHTML = Address;
            document.getElementById("arrayMrt").innerHTML = NearestMrt;
            document.getElementById("arrayOpeningHours").innerHTML = OpeningHours;
            document.getElementById("arrayPhoneNumber").innerHTML = PhoneNumber;
            document.getElementById("arrayCuisineType").innerHTML = CuisineType;
            document.getElementById("arrayBrandWebsite").innerHTML = BrandWebsite;
            document.getElementById("arrayMap").innerHTML = RestaurantMap;

            if (localStorage.getItem("User_id") == 0) {
                document.getElementById("AddReviewButton").style.visibility = "hidden";
            }
        }
    }

    document.getElementById("parent").textContent = "";
}



