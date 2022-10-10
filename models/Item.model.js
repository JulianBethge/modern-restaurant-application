const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            enum: ["Starter", "Main", "Dessert", "Drink"]
        },
        description: String,
        image_url: String,
        menuNumber: Number
    },
    {
        timestamps: true
    }
);

module.exports = model('Item', itemSchema);