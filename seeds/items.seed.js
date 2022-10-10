const mongoose = require('mongoose');

const Item = require('../models/Item.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/modern-restaurant-application';

const items = [
  {
    title: "Pizza Salami",
    price: 12.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "../public/images/pizza_salami.jpg",
    menuNumber: 201,
  },
  {
    title: "Pizza Funghi",
    price: 13.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "../public/images/pizza_funghi.jpg",
    menuNumber: 202,
  },
  {
    title: "Pizza Hawai",
    price: 11.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "../public/images/pizza_hawai.jpg",
    menuNumber: 203,
  },
  {
    title: "Pizza 4 Formaggi",
    price: 13.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "../public/images/pizza_quattro_formaggi.jpg",
    menuNumber: 204,
  },
  {
    title: "Pizza Margarita",
    price: 10.50,
    category: "main",
    description: "lorem ipsum...",
    image_url: "../public/images/pizza_margarita.jpg",
    menuNumber: 205
},
{
  title: "Garlic Pizza Bread",
  price: 5.50,
  category: "starter",
  description: "lorem ipsum...",
  image_url: "../public/images/garlic_pizza_bread.jpg",
  menuNumber: 1
},
{
  title: "Cheese Pizza Bread",
  price: 6.50,
  category: "starter",
  description: "lorem ipsum...",
  image_url: "../public/images/cheesy_pizza_bread.jpg",
  menuNumber: 2
},
{
  title: "Salami Pizza Bread",
  price: 6.00,
  category: "starter",
  description: "lorem ipsum...",
  image_url: "../public/images/garlic_pizza_bread.jpg",
  menuNumber: 3
},
{
  title: "New York Cheescake",
  price: 6.00,
  category: "dessert",
  description: "lorem ipsum...",
  image_url: "../public/images/new_york_cheescake.jpg",
  menuNumber: 3
},
{
  title: "Tiramisu",
  price: 6.00,
  category: "dessert",
  description: "lorem ipsum...",
  image_url: "../public/images/tiramisu.jpg",
  menuNumber: 3
},
{
  title: "Still Water",
  price: 2.50,
  category: "drink",
  description: "lorem ipsum...",
  image_url: "../public/images/still_water.jpg",
  menuNumber: 100
},
{
  title: "Sparkling Water",
  price: 2.50,
  category: "drink",
  description: "lorem ipsum...",
  image_url: "../public/images/sparkling_water.jpg",
  menuNumber: 101
},
{
  title: "Beer 0.4",
  price: 3.50,
  category: "drink",
  description: "lorem ipsum...",
  image_url: "../public/images/beer.jpg",
  menuNumber: 102
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
