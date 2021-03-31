"use strict"

class User {
    constructor(User_id, Username, Password, FirstName, LastName, Gender, Email, PhoneNumber, Country, Address, PostalCode, ProfilePictureUrl, AccountCreationDate, isActive) 
    {
        this.User_id = User_id;
        this.Username = Username;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Country = Country;
        this.Address = Address;
        this.PostalCode = PostalCode;
        this.ProfilePictureUrl = ProfilePictureUrl;
        this.AccountCreationDate = AccountCreationDate;
        this.isActive = isActive;
    }

    getUser_id() {
        return this.User_id;
    }
    getUsername() {
        return this.Username;
    }
    getPassword() {
        return this.Password;
    }
    getfirstName() {
        return this.FirstName;
    }
    getlastName() {
        return this.LastName;
    }
    getgender() {
        return this.Gender;
    }
    getemail() {
        return this.Email;
    }
    getphoneNumber() {
        return this.PhoneNumber;
    }
    getcountry() {
        return this.Country;
    }
    getaddress() {
        return this.Address;
    }
    getpostalCode() {
        return this.PostalCode;
    }
    getprofilePictureUrl() {
        return this.ProfilePictureUrl;
    }
    getaccountCreationDate() {
        return this.AccountCreationDate;
    }
    getisActive() {
        return this.isActive;
    }


    setUser_id(User_id) {
        this.User_id = User_id;
    }
    setUsername(Username) {
        this.Username = Username;
    }
    setPassword(Password) {
        this.Password = Password;
    }
    setfirstName(FirstName) {
        this.FirstName = FirstName;
    }
    setlastName(LastName) {
        this.LastName = LastName;
    }
    setgender(Gender) {
        this.Gender = Gender;
    }
    setemail(Email) {
        this.Email = Email;
    }
    setphoneNumber(PhoneNumber) {
        this.PhoneNumber = PhoneNumber;
    }
    setcountry(Country) {
        this.Country = Country;
    }
    setaddress(Address) {
        this.Address = Address;
    }
    setpostalCode(PostalCode) {
        this.PostalCode = PostalCode;
    }
    setprofilePictureUrl(ProfilePictureUrl) {
        this.ProfilePictureUrl = ProfilePictureUrl;
    }
    setaccountCreationDate(AccountCreationDate) {
        this.AccountCreationDate = AccountCreationDate;
    }
    setisActive(isActive) {
        this.isActive = isActive;
    }
}


module.exports = User;