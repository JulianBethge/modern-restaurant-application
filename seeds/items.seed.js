const mongoose = require('mongoose');

const Item = require('../models/Item.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/modern-restaurant-application';

const items = [
  {
    title: "Pizza Salami",
    price: 12.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "/images/pizza_salami.jpg",
  },
  {
    title: "Pizza Funghi",
    price: 13.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "/images/pizza_funghi.jpg",
  },
  {
    title: "Pizza Hawai",
    price: 11.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "/images/pizza_hawai.jpg",
  },
  {
    title: "Pizza 4 Formaggi",
    price: 13.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "/images/pizza_quattro_formaggi.jpg",
  },
  {
    title: "Pizza Margarita",
    price: 10.5,
    category: "main",
    description: "lorem ipsum...",
    image_url: "/images/pizza_margarita.jpg",
  },
  {
    title: "Garlic Pizza Bread",
    price: 5.5,
    category: "starter",
    description: "lorem ipsum...",
    image_url: "/images/garlic_pizza_bread.jpg",
  },
  {
    title: "Cheese Pizza Bread",
    price: 6.5,
    category: "starter",
    description: "lorem ipsum...",
    image_url: "/images/cheesy_pizza_bread.jpg",
  },
  {
    title: "Salami Pizza Bread",
    price: 6.0,
    category: "starter",
    description: "lorem ipsum...",
    image_url: "/images/garlic_pizza_bread.jpg",
  },
  {
    title: "New York Cheescake",
    price: 6.0,
    category: "dessert",
    description: "lorem ipsum...",
    image_url: "/images/new_york_cheescake.jpg",
  },
  {
    title: "Tiramisu",
    price: 6.0,
    category: "dessert",
    description: "lorem ipsum...",
    image_url: "/images/tiramisu.jpg",
  },
  {
    title: "Still Water",
    price: 2.5,
    category: "beverages",
    description: "lorem ipsum...",
    image_url: "/images/still_water.jpg",
  },
  {
    title: "Sparkling Water",
    price: 2.5,
    category: "beverages",
    description: "lorem ipsum...",
    image_url: "/images/sparkling_water.jpg",
  },
  {
    title: "Beer 0.4",
    price: 3.5,
    category: "beverages",
    description: "lorem ipsum...",
    image_url: "/images/beer.jpg",
  },
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
