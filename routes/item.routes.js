// Import models
const Item = require("../models/Item.model");

// Import middleware
const isLoggedIn = require("../middleware/isLoggedIn");
const isAdmin = require("../middleware/isAdmin");

// Router
const router = require("express").Router();

// 👇 Handling routes 👇

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
router.get("/menu/create", (req, res, next) => {
    res.render("items/item-create");    
});

// CREATE: Process form
router.post("/items/create", (req, res, next) => {
    
    console.log("File data.." + req.body.image_url);
    

    const newItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image_url: "../images/"+ req.body.image_url,
        menuNumber: req.body.menuNumber,
    }

    console.log("Here the new Item.." + newItem);

    Item.create(newItem)
    .then( newItem => {
        res.redirect("/menu");
    })
    .catch()

     
});

// UPDATE: Display form
router.get("/menu/:itemId/edit", isAdmin, (req, res, next) => {
    Item.findById(req.params.itemId)
    .then( (itemDetails) => {
        res.render("items/item-edit", itemDetails);
    })
    .catch( err => {
        console.log("Error getting item details from DB...", err);
        next();
    })
})

// UPDATE: Process form
router.post("/menu/:itemId/edit", isAdmin, (req, res, next) => {
    const itemId = req.params.itemId;

    const newDetails = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image_url: "../images/"+ req.body.image_url,
        menuNumber: req.body.menuNumber,
    }

    Item.findByIdAndUpdate(itemId, newDetails)
    .then(() => {
        res.redirect(`/menu/${itemId}`);
    })
    .catch(err => {
        console.log("Error updating item...", err);
        next(err);
    });


})

// DELETE


// Export router
module.exports = router;

