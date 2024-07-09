const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    nameForReview: { type: String, required: true },
    reviewInput: { type: String, required: true },
});

module.exports = mongoose.model('Review', ReviewSchema);
