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
        description: String
    },
    {
        timestamps: true
    }
);

module.exports = model('Item', itemSchema);