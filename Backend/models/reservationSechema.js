import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true,
        minLength : [3, "First name should be atleast 3 characters long"],
        maxLength : [30, "First name should be atmost 30 characters long"],
    },
    lastName: {
        type : String,
        required : true,
        minLength : [3, "First name should be atleast 3 characters long"],
        maxLength : [30, "First name should be atmost 30 characters long"],
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please enter a valid email address"],
    },
    phone : {
        type : String,
        required : true,
        minLength : [ 11, "Phone number should be atleast 11 characters long"],
        maxLength : [ 11, "Phone number should be atmost 11 characters long"],
    },
    time : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);