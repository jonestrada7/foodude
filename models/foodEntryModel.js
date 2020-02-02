const mongoose = require("mongoose");
// const slugify = require("slugify");

const foodEntrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'An entry must have a name']
        },
        foodName: {
            type: String,
            required: [true, 'An entry must have a type']
        },
        price: {
            type: Number,
            required: [true, 'An entry must have a price']
        },
        description: {
            type: String
        },
        location: String,
        image: String,
        likes: Number
    }
);

// Enables search by text
foodEntrySchema.index({ tag1: 'text' });

const foodEntry = mongoose.model('foodEntry', foodEntrySchema);

module.exports = foodEntry;