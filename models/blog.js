const { Schema, model } = require('mongoose');

const blogPosts = new Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 30,
        required: true
        // validate: {
        //     validator: function(v) {
        //         return /\[A-Z][a-z]/.test(v)
        //     },
        //     message: 'Do not add numbers'
        // }
    },
    description: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         /\d{3}-\d{2}-\d{4}/;
        //         },
        //         message: 'You must provide more than 2 sentences'
        // }
    },
    body: {
        type: String,
        required: true,
        maxLength: 70,
        minLength: 15
    }
});

const blog = model('BlogPosts', blogPosts);

module.exports = blog;