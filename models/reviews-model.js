const { urlencoded } = require('express');
const mongoose = require('../db/connections');

const ReviewSchema = new mongoose.Schema({
    company: String,
    img: String, 
    location: {city: String, state: String},
    title: String,
    compensation: Number,
    years: Number,
    gender: String,
    review: String,
}, {timestamp: Number});

const Review = mongoose.model('lucid', ReviewSchema);

module.exports = Review;