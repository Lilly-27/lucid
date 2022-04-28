const mongoose = require('../db/connections');

const ReviewSchema = new mongoose.Schema({
    company: String,
    img: String, 
    city: String, 
    state: String,
    title: String,
    compensation: Number,
    years: Number,
    gender: String,
    review: String,
}, {timestamps: true});

const Review = mongoose.model('lucid', ReviewSchema);

module.exports = Review;