"use strict"

const UserDB = require('../Models/Userdb');


var userDBObject = new UserDB();


function routeUser(app) {
    app.route('/login')
        .post(userDBObject.getPassword);
    app.route('/Registration')
        .post(userDBObject.register);
    app.route('/Validation')
        .post(userDBObject.validateResults);
    app.route('/updateuser')
        .post(userDBObject.getUserInfo)//Retrieve Account Data
        .put(userDBObject.updateAccount)//Update Account Data
        .delete(userDBObject.deleteUser);//Delete Account Data
}
module.exports = { routeUser };