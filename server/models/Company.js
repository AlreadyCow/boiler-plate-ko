const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String, 
        trim : true,
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
});

companySchema.pre('save', function(next) {
    next();
})
companySchema.set('collection', 'Company_TB');

const Company = mongoose.model('Company_TB', companySchema);
module.exports = {Company};