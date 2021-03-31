function displayReview(lsrestaurant_id) {
    var table = document.getElementById("reviewTable");
    var reviewCount = 0;
    var message = "";
    table.innerHTML = "";
    totalReview = review_array.length;
    for (var count = 0; count < totalReview; count++) {

        if (review_array[count].Restaurant_id == lsrestaurant_id) {

            var BranchName = review_array[count].BranchName;
            var ReviewDate = review_array[count].ReviewDate;
            var Rating = review_array[count].Rating;
            var Price = review_array[count].Price;
            var RestaurantReview = review_array[count].RestaurantReview;
            var Username = review_array[count].Username;
            var R_id = review_array[count].Review_id;

            var cell = '<div class="col-5 my-auto awesomecrap">' +
                '<div class="text-center"  >' +
                '<span><br>Username:&nbsp; ' + Username + '</span><br>' +
                '</div>' +
                '<div class="text-center"  >' +
                '<span><br>Name:&nbsp;' + BranchName + '</span><br>' +
                '</div>' +
                '<div class="text-center"  >' +
                '<span><br>Review:&nbsp;' + new Date(ReviewDate) + '</span><br>' +
                '</div>' +
                '<div class="text-center" id="rating" style="margin: 20px 0px 20px 0px !important;">' +
                '<label for="star">Rate Restaurant</label>&nbsp;' +
                '<p class="card-text" id="rating' + count + '"></p>' +
                '</div>'+
                '<div class="text-center" id="price" style="margin: 10px 0px 0px 0px !important;">' +
                '<label for="dollar">Rate Price</label>&nbsp;' +
                '<p class="card-text" id="price' + count + '"></p>' +
                '</div>'+
                '<div class="text-center bottomspace"  >' +
                '<span><br>Review:&nbsp;' + RestaurantReview + '</span><br>';
                if (Username == localStorage.getItem("Username")) {
                    cell += "<div class='text-center  topspace'>" +
                        "<button data-toggle='modal' class='tm-btn-send' data-target='#modalEditReview' onclick='updateReview(this)' item=" + R_id + ">Edit Review</button>" +
                        "</div>"
                }
    
                cell += '</div>' +
                '</div>' +
                '</div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;

            var star = "";

            for (var j = 0; j < Rating; j++) {
                star += "<img src=" + starYellow + " width='15px' height='15px'>";
            }
            document.getElementById("rating" + count).insertAdjacentHTML("beforebegin", star);
            var dollarDollardollar = "";

            for (var j = 0; j < Price; j++) {
                dollarDollardollar += "<img src=" + dollarYellow + " width='15px' height='15px'>";
            }
            document.getElementById("price" + count).insertAdjacentHTML("beforebegin", dollarDollardollar);
        }
    }

    // message = restaurantCount + " Top restaurant from " + category + " Cuisine" ;    
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function updateReview(element) {
    event.preventDefault();
    var item = element.getAttribute("item");
    var listReviewElement = new XMLHttpRequest();

    listReviewElement.open('POST', "/UpdateRestaurantReview", true);

    //This function will be called when data returns from the web api
    var listreviewObject = new Object();
    listreviewObject.Review_id = item;
    listReviewElement.setRequestHeader("Content-Type", "application/json");
    //respond
    listReviewElement.onload = function () {
        var listReview_array = JSON.parse(listReviewElement.responseText);
        var listReviewAll = listReview_array.length;
        for (var count = 0; count < listReviewAll; count++) {
            document.getElementById("EditReviewUsername").value = listReview_array[count].Username;
            document.getElementById("EditReviewUserReview").value = listReview_array[count].RestaurantReview;
            displayColorStar('EditReviewpopStar', listReview_array[count].rating);
            displayColorDollar('EditReviewpopDollar', listReview_array[count].price);
        }
        document.getElementById("loadUpdateComment").setAttribute("item", item);
        document.getElementById("deleteThisReviewid").setAttribute("item", item);

    };
    //request
    listReviewElement.send(JSON.stringify(listreviewObject));
    

}


function loadUpdateReview(element) {

    event.preventDefault();
    var item = element.getAttribute("item");

    var priceUpdate = price;
    var ratingUpdate = rating;
    var reviewUpdate = document.getElementById("EditReviewUserReview").value;


    var newReviewUpdate = new Object();

    newReviewUpdate.Price = priceUpdate;
    newReviewUpdate.Rating = ratingUpdate;
    newReviewUpdate.RestaurantReview = reviewUpdate;
    newReviewUpdate.Review_id = item;

    var putReview = new XMLHttpRequest();

    putReview.open("PUT", "/UpdateRestaurantReview", true);
    putReview.setRequestHeader("Content-Type", "application/json");
    //request
    putReview.send(JSON.stringify(newReviewUpdate));
    //respond
    putReview.onload = function () {
        if (putReview.status == 200) {
            alert("Review Successfully Updated");
            location.reload();
        }
        else {
            alert("Review Not Successful");
        }
    };
}

function deleteThisReview(element) {

    event.preventDefault();
    var item = element.getAttribute("item");
    var deletethisReviewObject = new Object();
    deletethisReviewObject.Review_id = item;

    var deleteReview = new XMLHttpRequest();

    deleteReview.open("DELETE", "/UpdateRestaurantReview", true);
    deleteReview.setRequestHeader("Content-Type", "application/json");
    //request
    deleteReview.send(JSON.stringify(deletethisReviewObject));
    //respond
    deleteReview.onload = function () {
        if (deleteReview.status == 200) {
            alert("Review Successfully deleted");
            location.reload();
        }
        else {
            alert("Review Not Successful");
        }
    };
}

function getRestaurantReviewInfo() {
    var requestReview = new XMLHttpRequest();
    requestReview.open('POST', "/RestaurantReview", true);

    //This function will be called when data returns from the web api
    var reviewObject = new Object();
    reviewObject.Restaurant_id = localStorage.getItem("restaurant_id");
    requestReview.setRequestHeader("Content-Type", "application/json");



    requestReview.onload = function () {

        var lsrestaurant_id = localStorage.getItem("restaurant_id");
        review_array = JSON.parse(requestReview.responseText);

        displayReview(lsrestaurant_id);
    };

    //This command starts the calling of the Restaurant web api
    requestReview.send(JSON.stringify(reviewObject));
}


function addNewReview() {
    event.preventDefault();

    var useridReview = localStorage.getItem("User_id");
    var restaurantIdReview = localStorage.getItem("restaurant_id");
    var dateReview = new Date();
    var priceReview = price;
    var ratingReview = rating;
    var restaurantReview = document.getElementById("userReview").value;

    var addReviewObject = new Object();

    addReviewObject.User_id = useridReview;
    addReviewObject.Restaurant_id = restaurantIdReview;
    addReviewObject.ReviewDate = dateReview;
    addReviewObject.Price = priceReview;
    addReviewObject.Rating = ratingReview;
    addReviewObject.RestaurantReview = restaurantReview;


    var postReview = new XMLHttpRequest();

    postReview.open("POST", "/newRestaurantReview", true);
    postReview.setRequestHeader("Content-Type", "application/json");
    //request
    postReview.send(JSON.stringify(addReviewObject));
    //respond
    postReview.onload = function () {
        if (postReview.status == 200) {
            alert("Review Successfully Posted");
            location.reload();
        }
        else {
            alert("Review Not Successful");
        }
    };
}

function insertUsername() {

    document.getElementById("AddReviewUsername").value = localStorage.getItem("Username");
}



function rateStar(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the star images.
    for (let star of stars) {
        star.setAttribute("src", starEmpty);
    }
    changestarYellow(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the star image.
function changestarYellow(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starYellow);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starYellow);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starYellow);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starYellow);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starYellow);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starYellow);
            rating = 5;
            break;
    }
}

//This function displayS the correct number of colored star
//based on the  rating that is given in the user comment
function displayColorStar(classname, num) {
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let star of stars) {
        star.setAttribute("src", starEmpty);
    }
    changestarYellow(num, classTarget);
}

function rateDollar(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var dollars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the dollar images.
    for (let dollar of dollars) {
        dollar.setAttribute("src", dollarEmpty);
    }
    changedollarYellow(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the dollar image.
function changedollarYellow(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", dollarYellow);
            price = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", dollarYellow);
            price = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", dollarYellow);
            price = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", dollarYellow);
            price = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", dollarYellow);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", dollarYellow);
            price = 5;
            break;
    }
}

//This function displayS the correct number of colored dollar
//based on the rating that is given in the user comment
function displayColorDollar(classname, num) {
    var dollars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let dollar of dollars) {
        dollar.setAttribute("src", dollarEmpty);
    }
    changedollarYellow(num, classTarget);
}

