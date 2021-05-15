
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    

// const GeoSchema = new Schema({
//     type:{
//         type:String,
//         default:"Point"
//     },
//     coordinates:{
//         type:[Number],
//         index:"2dsphere"
//     }
// })

const WebSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    quantity:{
        type:Number
    }                        
});

const Web = mongoose.model('web',WebSchema);

module.exports = Web;