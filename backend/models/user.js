const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default:''
    },
    phonenumber:{
        type:String,
        default:''
    },
    hours:{
        type:String,
        default:''
    },
    dob:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:''
    },
    availability:{
        type:String,
        default:''
    },
    skills:{
        type:Array,
        
    }


}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;