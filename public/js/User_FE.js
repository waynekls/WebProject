"use strict"

// const { application } = require("express");

function loadUserbarFunction() {
    if (localStorage.getItem("User_id") > 0) {
        document.getElementById("userbar").innerHTML = '<div class="dropdown show"><a class="btn orangebackground btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            'Hello &nbsp' + localStorage.getItem("Username") + '&nbsp !</a>' +

            '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">' +
            '<a class="dropdown-item" data-toggle="modal" data-target="#modalUpdate" onclick="closeModal()">Update Profile</a>' +
            '<a class="dropdown-item" href="#" onclick="logout()">Logout</a>' +
            '</div>' +
            '</div>';

        document.getElementById('btnRegis').innerHTML = '';
        document.getElementById('btnLogin').innerHTML = '';

    }
}

function logout() {
    localStorage.setItem("User_id", 0);
    localStorage.setItem('Username', 0)
    location.reload();
}


function loginFunction() {

    var usernameLogin = document.getElementById("username").value;
    var passwordLogin = document.getElementById("password").value;

    var account = new Object();
    account.username = usernameLogin;//Must match Userdb (request.body.Username)
    // account.Password = passwordLogin;
    var postLogin = new XMLHttpRequest();

    postLogin.open("POST", loginURL, true); //use the HTTP post method
    postLogin.setRequestHeader("Content-Type", "application/json");

    //Request
    postLogin.send(JSON.stringify(account));

    //Respond
    postLogin.onload = function () {

        if (postLogin.responseText === "[]") {
            alert("Incorrect Username or Password");
        }
        else {
            account_array = JSON.parse(postLogin.responseText);// Returns Data

            if (account_array[0].Password === passwordLogin) {//password must = Userdb
                var userid = String(account_array[0].User_id);
                var username = String(usernameLogin);
                localStorage.setItem("User_id", userid);
                localStorage.setItem("Username", username);
                alert("Login Successful");
                $('#modalLogin').modal('hide');
                location.reload();
            }
            else {
                alert("Incorrect Username or Password");
            }
        }

    };
}

function registerUser() {
    event.preventDefault();
    var usernameRegister = document.getElementById("tUsername").value;
    var confirmPasswordRegister = document.getElementById("tConfirmPassword").value;
    var firstnameRegister = document.getElementById("tFirstName").value;
    var lastnameRegister = document.getElementById("tLastName").value;
    var genderRegister;
    if (document.getElementById("genderMale").checked) {
        genderRegister = "Male";
    }
    else if (document.getElementById("genderFemale").checked) {
        genderRegister = "Female";
    }
    var emailRegister = document.getElementById("tEmail").value;
    var phonenumberRegister = document.getElementById("tPhoneNumber").value;
    var countryRegister = document.getElementById("tCountry").value;
    var addressRegister = document.getElementById("tAddress").value;
    var postalcodeRegister = document.getElementById("tPostalCode").value;

    var register = new Object();

    register.Username = usernameRegister;
    register.Password = confirmPasswordRegister;
    register.FirstName = firstnameRegister;
    register.LastName = lastnameRegister;
    register.Gender = genderRegister;
    register.Email = emailRegister;
    register.PhoneNumber = phonenumberRegister;
    register.Country = countryRegister;
    register.Address = addressRegister;
    register.PostalCode = postalcodeRegister;
    register.ProfilePictureUrl = "";
    register.isActive = 0;

    var postRegister = new XMLHttpRequest();

    postRegister.open("POST", "/Registration", true);
    postRegister.setRequestHeader("Content-Type", "application/json");
    //request
    postRegister.send(JSON.stringify(register));
    //respond
    postRegister.onload = function () {

        if (postRegister.status == 200) {
            alert("Register Successful");
            $('#modalregistration').modal('hide');
        }
        else {
            alert("Register Not Successful");
        }
    };
}


function validateResult() {


    var vUsername = document.getElementById("tUsername").value;
    var vEmail = document.getElementById("tEmail").value;
    var vPhoneNumber = document.getElementById("tPhoneNumber").value;

    var vResult = new Object();

    vResult.Username = vUsername;
    vResult.Email = vEmail;
    vResult.PhoneNumber = vPhoneNumber;

    var putReview = new XMLHttpRequest();

    putReview.open("POST", "/Validation", true);
    putReview.setRequestHeader("Content-Type", "application/json");
    //request

    putReview.send(JSON.stringify(vResult));
    //respond
    putReview.onload = function () {

        validate_array = JSON.parse(putReview.responseText)
        var validate_array2 = [];
        validate_array2 = validate_array[0];
      
            if(validate_array2[0].ValidationStatus === 1)
            {registerUser();}

            else
            {alert(validate_array2[0].ErrorMessage);}
    };
}


function validatePasswords(){
if(document.getElementById("tConfirmPassword").value == document.getElementById("tPassword").value)
            {validateResult()}
            else
            {alert("Password do not match");}
}


function getAddress() {

    var postalinput = document.getElementById("tPostalCode").value;
    var addressObject = new Object();
    addressObject.PostalCode = postalinput;
    var numbertest = /^[0-9]+$/;

    if (document.getElementById("tPostalCode").value.match(numbertest)) {

        var requestAddress = new XMLHttpRequest();
        requestAddress.open('PUT', "/Registrations", true);

        //This function will be called when data returns from the web api

        requestAddress.setRequestHeader("Content-Type", "application/json");

        requestAddress.onload = function () {

            requestAddArray = JSON.parse(requestAddress.responseText);

            document.getElementById("tAddress").value = requestAddArray[0].Address;
        }

    };

    //This command starts the calling of the Restaurant web api
    requestAddress.send(JSON.stringify(addressObject));
}


function loadUpdateProfile() {
    
    event.preventDefault();

    var updateEmail = document.getElementById("uEmail").value;
    var updatePhoneNumber = document.getElementById("uPhoneNumber").value;
    var updateCountry = document.getElementById("uCountry").value;
    var updateAddress = document.getElementById("uAddress").value;
    var updatePostalcode = document.getElementById("uPostalCode").value;
    var updateUserid = localStorage.getItem('User_id')

    var UpdateProfileObject = new Object();

    UpdateProfileObject.Email = updateEmail;
    UpdateProfileObject.PhoneNumber = updatePhoneNumber;
    UpdateProfileObject.Country = updateCountry;
    UpdateProfileObject.Address = updateAddress;
    UpdateProfileObject.PostalCode = updatePostalcode;
    UpdateProfileObject.User_id = updateUserid;

    var putUpdateProfile = new XMLHttpRequest();

    putUpdateProfile.open("PUT", "/updateuser", true);
    putUpdateProfile.setRequestHeader("Content-Type", "application/json");
    //request
    putUpdateProfile.send(JSON.stringify(UpdateProfileObject));
    //respond
    putUpdateProfile.onload = function () {
        if (putUpdateProfile.status == 200) {
            alert("Profile Successfully Updated");
            location.reload();
        }
        else {
            alert("Profile Not Successfully Updated");
        }
    };
}

function closeModal(){
    $("#modalLogin").modal("hide")
}