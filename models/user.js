const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        maxLength: 15,
        minLength: 3,
        required: true
    },
    lastName:{
        type: String,
        maxLength: 15,
        minLength: 4,
        required: [true, 'Lastname Required']
    },
    age: {
        type: Number,
        //min: [15, 'User must 18years and above'],
        //max: [75, 'User must be less the 75years'],
        required: true
        // validate: {
        //     validator: function(v) {
        //         return /\d{2}/.test(v)
        //     }
        // }
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    }
}, {timestamps: true});

const User = model('User', userSchema);

module.exports = User;