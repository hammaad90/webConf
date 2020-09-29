const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const webinarSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    type:{
        type: String
    },
    category: {
        type: String
    },
    company: {
        type: String
    },

    createdAt: {
        type: Date,
        default: function() {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: function() {
            return Date.now();
        }
    }
});

module.exports = mongoose.model('webinar', webinarSchema);