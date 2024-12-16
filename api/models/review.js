const mongoose = require('mongoose');

// Review Schema with reference to Product via productId
const reviewSchema = mongoose.Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId,  // Reference to the Product schema
        ref: 'product',  // Name of the Product model
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Review: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Review_date: {
        type: Date,  // Changed to Date type to handle actual Date objects
        default: Date.now  // Automatically use the current date
    },
    status: {
        type: String,
        default: 'active',
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);
