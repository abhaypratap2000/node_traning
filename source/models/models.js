const mongoose = require("mongoose");
// const validator = require("validator");

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        
    },
    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: [true, "Plese enter valid mail id your email is already present"],
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new console.error("Invalid Email");


        //     }
        // }
    }



})


// Creating a new collection 

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;