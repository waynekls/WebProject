"use strict";

const express = require("express");
const routeUser = require('./routes/routeUser');
const routeFeedback = require('./routes/routeFeedback');
const routeRestaurant = require('./routes/routeRestaurant');
const routeReview = require('./routes/routeReview');
const routePostal = require('./routes/routePostal');

const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeUser.routeUser(app);
routeFeedback.routeFeedback(app);
routeRestaurant.routeRestaurant(app);
routeReview.routeReview(app);
routePostal.routePostal(app);



function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
