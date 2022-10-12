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
            enum: ["starter", "main", "dessert", "drink"]
        },
        description: String,
        image_url: String,
        menuNumber: {
            type: Number,
            unique: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Item', itemSchema);