const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String
    },
    price: {
        type: String
    },
    category:{
        type: String
    }
   
}, {
    collection:'product'
})

module.exports = mongoose.model("product" , userSchema);