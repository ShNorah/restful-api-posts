const mongoose = require('mongoose');

//schema descibes how your data looks
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts', PostSchema)