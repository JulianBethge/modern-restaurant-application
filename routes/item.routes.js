// Import models
const Item = require("../models/Item.model");


// ********* require fileUploader in order to use it ********
const fileUploader = require('../config/cloudinary.config');

// Import middleware
const isLoggedIn = require("../middleware/isLoggedIn");
const isAdmin = require("../middleware/isAdmin");

// Router
const router = require("express").Router();

// 👇 Handling routes 👇

// READ: List all items
router.get("/menu", (req, res, next) => {

    let {startersArr, mainsArr, desertsArr, drinksArr} = [];


    Item.find()
    .then( itemsFromDB => {

        startersArr = itemsFromDB.filter( (v) => {
            if( v.category == "starter"){
                return v;
            }
        })

        mainsArr = itemsFromDB.filter( (v) => {
            if( v.category == "main"){
                return v;
            }
        })

        desertsArr = itemsFromDB.filter( (v) => {
            if( v.category == "dessert"){
                return v;
            }
        })

        drinksArr = itemsFromDB.filter( (v) => {
            if( v.category == "drink"){
                return v;
            }
        })

        res.render("items/items-list", {startersArr, mainsArr, desertsArr, drinksArr, user: req.session.user} );
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
router.get("/items/create", isLoggedIn, isAdmin, (req, res, next) => {
    res.render("items/item-create");    
});

// CREATE: Process form
router.post("/items/create", isLoggedIn, isAdmin, fileUploader.single('image_url'), (req, res, next) => {
    
    
    

    const newItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image_url: req.file.path,
        menuNumber: req.body.menuNumber,
    }

    

    Item.create(newItem)
    .then( newItem => {
        res.redirect("/menu");
    })
    .catch()

     
});

// UPDATE: Display form
router.get("/menu/:itemId/edit", isLoggedIn, isAdmin, (req, res, next) => {
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
router.post("/menu/:itemId/edit", isLoggedIn, isAdmin, fileUploader.single('image_url'), (req, res, next) => {
   
    const itemId = req.params.itemId;
    console.log("HERE IS THE REQ"+ req.file.path);

    const newDetails = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image_url: req.file?.path,
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
router.post("/menu/:itemId/delete", isLoggedIn, isAdmin, (req, res, next) => {
    Item.findByIdAndDelete(req.params.itemId)
      .then(() => {
        res.redirect("/menu");
      })
      .catch(err => {
        console.log("Error deleting item...", err);
        next(err);
      });
  
  });


// Export router
module.exports = router;

