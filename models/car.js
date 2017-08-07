var mongooose = require("mongoose");

var Car = mongooose.Schema({
    driver_name: {
        type: String,
        required: true
    },
    license_plate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["IN", "OUT"],
        required: true,
        default: "IN"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongooose.model("Car", Car);