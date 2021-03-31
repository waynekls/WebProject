"use strict"

class FeedbackClass{
    constructor(Feedback_id, User_id,Name,Email,PhoneNumber,Feedback,timePosted)
    {
       this.Feedback_id = Feedback_id;
       this.User_id =User_id;
       this.Name = Name;
       this.Email =Email;
       this.PhoneNumber = PhoneNumber;
       this.Feedback =Feedback;
       this.timePosted =timePosted;
    }
    getfeedback_id(){
    return this.Feedback_id;
    }

    getuser_id(){
        return this.User_id;
    }
    getname(){
        return this.Name;
    }
    getemail(){
        return this.Email;
    }
    getphoneNumber(){
        return this.PhoneNumber;
    }
    getfeedback(){
        return this.Feedback;
    }
    gettimePosted(){
        return this.timePosted;
    }
    setfeedback_id(Feedback_id){
        this.Feedback_id = Feedback_id;
    }
    setuser_id(User_id){
        this.User_id = User_id;
    }
    setname(Name){
        this.review = Name;
    }
    setemail(Email){
        this.Email = Email;
    }
    setphoneNumber(PhoneNumber){
        this.PhoneNumber = PhoneNumber;
    }
    setfeedback(Feedback){
        this.Feedback = Feedback;
    }
    settimeposted(TimePosted){
        this.TimePosted = TimePosted;
    }
}


module.exports = FeedbackClass;