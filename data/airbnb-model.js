const mongoose = require("mongoose");

const airbnbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    house_rules: {
        type: String,
        required: true
    },
    property_type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cleaning_fee: {
        type: String,
        required: true
    },
    address: {
        street: String,
        suburb: String,
        government_area: String,
        market: String,
        country: String,
        country_code: String,
        location: {
            type: String,
            coordinates: [Number],
            is_location_exact: Boolean
        }
    }
})

mongoose.model("Airbnb", airbnbSchema, "airbnb")