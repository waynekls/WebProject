//This function is to call the restaurant api and get all the restaurant
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantList() {
    var request = new XMLHttpRequest();
    request.open('GET', "/Restaurantlist", true);

    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the restaurant records into our array
    restaurant_array = JSON.parse(request.responseText);
    //call the function so as to display all restaurant tiles for "Now Showing"
    // fetchComments();
    var category = localStorage.getItem("category");

    displayRestaurant(category);
    };
    //This command starts the calling of the Restaurant web api
    request.send();
}

function getRestaurantSearch() {
    var request = new XMLHttpRequest();
    request.open('GET', "/Restaurantlist", true);

    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the restaurant records into our array
    restaurant_array = JSON.parse(request.responseText);
    //Get searchPhrase
    var searchPhrase = localStorage.getItem("searchPhrase");
    //call the function so as to display all restaurant tiles which matches the searchphrase
    displaySearchRestaurant(searchPhrase);
    };
    //This command starts the calling of the Restaurant web api
    request.send();
}

function displaySearchRestaurant(searchPhrase) 
{    
    
    var table = document.getElementById("restaurantSearchTable");    
    var restaurantCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalRestaurant = restaurant_array.length;    
    for (var count = 0; count < totalRestaurant; count++) 
    {        

        if(String(restaurant_array[count].BranchName).toLowerCase().includes(String(searchPhrase).toLowerCase()))
        {

            var restaurant_id = restaurant_array[count].Restaurant_id; 
            var restaurantImgurl = restaurant_array[count].RestaurantImgURL1;            
            var branchName = restaurant_array[count].BranchName;
            var brandinfo = restaurant_array[count].BrandInfo;

            var cell = 
                        '<div class="container col-sm-4 px-4" >'+
                        '<div class="card-group ">'+
                          "<img class='card-img-top' src='img"+restaurantImgurl+"' style='width:100%' height='250px'>"+
                          '<div class="card-body">'+
                            '<h4 class="card-title">'+branchName+'</h4>'+
                            '<p class="card-text a" >'+brandinfo+'</p>'+
                            '<a href="RestaurantMain.html" item="' + restaurant_id + '" class="btn btn-danger orangebackground stretched-link" onclick="listSelectedRestaurant(this)">See more info</a>'
                          '</div>'+
                        '</div>'+
                        '<br><br>';


             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }
        
    }    
    message = restaurantCount + " Search Results Returned ";    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
    
}


//This function is to display the restaurant tiles
function displayRestaurant(category) 
{    


    var table = document.getElementById("restaurantTable");    
    var restaurantCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalRestaurant = restaurant_array.length;    
    for (var count = 0; count < totalRestaurant; count++) 
    {        
        if(restaurant_array[count].CuisineType === category){
            var restaurant_id = restaurant_array[count].Restaurant_id; 
            var restaurantImgurl = restaurant_array[count].RestaurantImgURL1;            
            var branchName = restaurant_array[count].BranchName;
            var brandinfo = restaurant_array[count].BrandInfo;

            var cell = 
                        '<div class="container col-sm-4 px-4" >'+
                        '<div class="card-group ">'+
                          "<img class='card-img-top' src='img"+restaurantImgurl+"' style='width:100%' height='285px'>"+
                          '<div class="card-body">'+
                            '<h4 class="card-title">'+branchName+'</h4>'+
                            '<p class="card-text a" >'+brandinfo+'</p>'+
                            '<a href="RestaurantMain.html" item="' + restaurant_id + '" class="btn btn-danger orangebackground stretched-link" onclick="listSelectedRestaurant(this)">See more info</a>'
                          '</div>'+
                        '</div>'+
                        '<br><br>';


             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }
    }    
    message = restaurantCount + " Top restaurant from " + category + " Cuisine" ;    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
}
//This function is to display the "Now Showing" restaurant
function listWestern() {

    localStorage.setItem("category","Western");
   }

function listChinese() {
   
    localStorage.setItem("category","Chinese");
   
  }

function listIndian() {
   
    localStorage.setItem("category","Indian");
  
}

function listJapanese() {

    localStorage.setItem("category","Japanese");
  
}

function saveSearch() {

    localStorage.setItem("searchPhrase",document.getElementById('searchBox').value);
  
}

function listSelectedRestaurant(element) {

    var item =  parseInt(element.getAttribute("item"));
    localStorage.setItem("restaurant_id",item);
   }

