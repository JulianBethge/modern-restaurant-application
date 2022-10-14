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
    title: "Caprese de Bufalina",
    price: 5.5,
    category: "starter",
    description: "Caprese di Bufala is a soft pasteurized buffalo milk cheese with flakes of dried tomato in paste. After a brief aging period, the wheels are subsequently rubbed with a treatment of extra virgin olive oil and oregano. This gives it a fresh and delicate flavour and an aromatic aftertaste, reminiscent of the Mediterranean",
    image_url: "/images/caprese_de_bufalina.jpg",
  },
  {
    title: "Mixed Antipasti",
    price: 6.5,
    category: "starter",
    description: "The traditional first course of a formal Italian meal.Usually made of bite-size small portions and served on a platter from which everyone serves themselves, the purpose of antipasti is to stimulate the appetite.[2] Typical ingredients of a traditional antipasto include cured meats, olives, peperoncini, mushrooms, anchovies, artichoke hearts, various cheeses (such as provolone or mozzarella), pickled meats, and vegetables in oil or vinegar.",
    image_url: "/images/Antipasto_Classico.jpg",
  },
  {
    title: "Best of Bruschetta",
    price: 6.0,
    category: "starter",
    description: "Bruschetta with tomatoes, involves basil, fresh tomato, garlic and onion or mozzarella. Bruschetta is usually served as a snack or appetizer. ",
    image_url: "/images/bruschetta.jpg",
  },
  {
    title: "New York Cheescake",
    price: 6.0,
    category: "dessert",
    description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sometimes sponge cake",
    image_url: "/images/new_york_cheescake.jpg",
  },
  {
    title: "Tiramisu",
    price: 6.0,
    category: "dessert",
    description: "Tiramisu (Italian: tiramisù) is a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts.[2] Its origins are often disputed among Italian regions Veneto and Friuli Venezia Giulia.",
    image_url: "/images/tiramisu.jpg",
  },
  {
    title: "Still Water",
    price: 2.5,
    category: "beverages",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/Still_WAter_One.jpg",
  },
  {
    title: "Sparkling Water",
    price: 2.5,
    category: "beverages",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image_url: "/images/Sparkling_WAter_One.jpg",
  },
  {
    title: "Pilsner Beer 0.5",
    price: 3.5,
    category: "beverages",
    description: "Pilsner is a pale lager with a crisp, refreshing taste that's lightly hopped. It was originally brewed in the town of Pilsen (Plzeň) in what is now the Czech Republic.",
    image_url: "/images/German_Pilsner.jpg",
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
