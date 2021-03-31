function addNewFeedback() {

    var useridFeedback = localStorage.getItem("User_id");
    var nameFeedback = document.getElementById("contact_name").value
    var emailFeedback = document.getElementById("contact_email").value
    var phoneNumberFeedback = document.getElementById("contact_phone").value
    var FeedbackFeedback = document.getElementById("contact_message").value
    var dateFeedback = new Date();

    var addFeedbackObject = new Object();

    addFeedbackObject.User_id = useridFeedback;
    addFeedbackObject.Name = nameFeedback;
    addFeedbackObject.Email = emailFeedback;
    addFeedbackObject.PhoneNumber = phoneNumberFeedback;
    addFeedbackObject.Feedback = FeedbackFeedback;
    addFeedbackObject.TimePosted = dateFeedback;


    var postFeedback = new XMLHttpRequest();

    postFeedback.open("POST", "/feedback", true);
    postFeedback.setRequestHeader("Content-Type", "application/json");
    //request
    postFeedback.send(JSON.stringify(addFeedbackObject));
    //respond
    postFeedback.onload = function () {
        if (postFeedback.status == 200) {
            alert("Review Successfully Posted");
            location.reload();
        }
        else {
            alert("Review Not Successful");
        }
    };
}

function getFeedbackUserInfo() {

    if (localStorage.getItem("User_id") > 0) {
        var requestUserinfo = new XMLHttpRequest();

        requestUserinfo.open('PUT', "/feedback", true);


        //This function will be called when data returns from the web api
        var infoObject = new Object();

        infoObject.User_id = localStorage.getItem("User_id");
        requestUserinfo.setRequestHeader("Content-Type", "application/json");

        requestUserinfo.onload = function () {

            requestUserinfoArray = [];
            requestUserinfoArray = JSON.parse(requestUserinfo.responseText);

            document.getElementById("contact_name").value = requestUserinfoArray[0].FirstName;
            document.getElementById("contact_email").value = requestUserinfoArray[0].Email;
            document.getElementById("contact_phone").value = requestUserinfoArray[0].PhoneNumber;

        };

        //This command starts the calling of the Restaurant web api
        requestUserinfo.send(JSON.stringify(infoObject));
    }
}