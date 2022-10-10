// Import models
const Item = require("../models/Item.model");

// Import Middleware
// 

// router
const router = require("express").Router();

// 👇 Start handling routes here

// READ: List all items
router.get("/menu", (req, rest, next) => {
    Item.find()
    .then( itemsFromDB => {
        rest.render("items/items-list", {items: itemsFromDB})
    })
    .catch( err => {
        console.log("error getting items from DB", err);
        next(err);
    })
});

// READ: Item details
router.get("/menu/:itemId", (req, res, next) => {
    const id = req.params.itemId;

    Item.findById(id)
    .then( itemDetails => {
        res.render("items/item-details", itemDetails);
    })
    .catch( err => {
        console.log("error getting item details from DB", err);
        next();
    })
});

// CREATE: Display form

// CREATE: Process form

// UPDATE: Display form

// UPDATE: Process form

// DELETE


// Export router
module.exports = router;

