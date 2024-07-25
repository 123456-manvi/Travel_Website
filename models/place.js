const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');


const placeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-bridge-over-a-river-with-a-house-in-the-background-vwRbfqctpkQ",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-bridge-over-a-river-with-a-house-in-the-background-vwRbfqctpkQ" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
