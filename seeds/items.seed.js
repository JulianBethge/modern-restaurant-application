const mongoose = require('mongoose');

const Item = require('../models/Item.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/modern-restaurant-application';

const items = [
    {
        title: "Pizza Salami",
        price: 12.50,
        category: "main",
        description: "lorem ipsum...",
        image_url: "../public/images/pizza_salami.jpg",
        menuNumber: 201
    
    },
    {
        title: "Pizza Funghi",
        price: 13.50,
        category: "main",
        description: "lorem ipsum...",
        image_url: "../public/images/pizza_funghi.jpg",
        menuNumber: 202
    }
];

mongoose
.connect(MONGO_URI)
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  return Item.create(items);
})
.then(itemsFromDB => {
  console.log(`Created ${itemsFromDB.length} items`);

  //close DB
  return mongoose.connection.close();

})
.then(() => {
  console.log('DB connection closed');
})
.catch((err) => {
  console.error("Error connecting to mongo: ", err);
});
