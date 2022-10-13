const mongoose = require('mongoose');

const Item = require('../models/Item.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/modern-restaurant-application';

const items = [
  {
    title: "Pizza Salami",
    price: 12.5,
    category: "main",
    description: "Pizza Salami is one of the most popular pizzas in Germany. This is no wonder, because salami is the most popular sausage in the world. So the Pizza Salami brings together everything a good pizza needs: crispy dough, fruity tomato sauce, stringy cheese and deliciously spicy salami.",
    image_url: "/images/pizza_salami.jpg",
  },
  {
    title: "Pizza Funghi",
    price: 13.5,
    category: "main",
    description: "Pizza Funghi is very popular not only among vegetarians. A Pizza Funghi consists of a pizza dough topped with tomato sauce, cheese and mushrooms. White or brown mushrooms are usually used. Sometimes pizza makers also use different types of mushrooms or a mixture of different mushrooms, such as mushrooms, chanterelles and porcini.",
    image_url: "/images/pizza_funghi.jpg",
  },
  {
    title: "Pizza Hawai",
    price: 11.5,
    category: "main",
    description: "The combination of salty ham, creamy cheese and sweet pineapple is an immensely popular pizza topping which, surprisingly, has little to do with Italy. According to the modern tradition, it was Sam Panopoulos, a Greek restorer in Canada, who in the 1960s was the first to place a piece of pineapple on a pizza. What was meant as a joke – “We were a young company and experimented a lot “- resulted in a much-loved dish that still knows how to charm.",
    image_url: "/images/pizza_hawai.jpg",
  },
  {
    title: "Pizza 4 Formaggi",
    price: 13.5,
    category: "main",
    description: "Is the cheese your favourite part of a pizza? Then you will love this Pizza Quattro Formaggi. The pizza is topped with 4 cheeses: mature cheese, Pecorino, ricotta and Gorgonzola.",
    image_url: "/images/pizza_quattro_formaggi.jpg",
  },
  {
    title: "Pizza Margherita",
    price: 10.5,
    category: "main",
    description: "The pizza Margherita, also called pizza Napoletana, is known as the queen of the pizzas. The dish was developed over a hundred years ago for the Italian queen, Margherita of Savoy, when she visited Naples. A Margherita is topped with tomatoes, mozzarella, fresh basil leaves and olive oil; the three colours of the Italian flag. A true Margherita goes into the oven for no more than ninety seconds and is relatively moist in the middle, so the tip of a slice tends to drip when you lift it to your mouth.",
    image_url: "/images/pizza_margarita.jpg",
  },
  {
    title: "Garlic Pizza Bread",
    price: 5.5,
    category: "starter",
    description: "As someone who LOVES pizza and LOVES garlic bread, it was time to combine the two. Naturally gluten-free and vegan, it also happens to be dairy-free, too! ",
    image_url: "/images/garlic_pizza_bread.jpg",
  },
  {
    title: "Cheese Pizza Bread",
    price: 6.5,
    category: "starter",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/cheesy_pizza_bread.jpg",
  },
  {
    title: "Salami Pizza Bread",
    price: 6.0,
    category: "starter",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/garlic_pizza_bread.jpg",
  },
  {
    title: "New York Cheescake",
    price: 6.0,
    category: "dessert",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/new_york_cheescake.jpg",
  },
  {
    title: "Tiramisu",
    price: 6.0,
    category: "dessert",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/tiramisu.jpg",
  },
  {
    title: "Still Water",
    price: 2.5,
    category: "beverages",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/still_water.jpg",
  },
  {
    title: "Sparkling Water",
    price: 2.5,
    category: "beverages",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/sparkling_water.jpg",
  },
  {
    title: "Beer 0.4",
    price: 3.5,
    category: "beverages",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
