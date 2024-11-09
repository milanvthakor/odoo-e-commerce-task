const products = [
  {
    name: "Apple",
    price: 200.0,
  },
  {
    name: "Banana",
    price: 100.0,
  },
  {
    name: "Orange",
    price: 150.0,
  },
  {
    name: "Pineapple",
    price: 300.0,
  },
  {
    name: "Watermelon",
    price: 400.0,
  },
  {
    name: "Grapes",
    price: 250.0,
  },
  {
    name: "Mango",
    price: 350.0,
  },
  {
    name: "Strawberry",
    price: 450.0,
  },
  {
    name: "Blueberry",
    price: 550.0,
  },
  {
    name: "Cherry",
    price: 650.0,
  },
  {
    name: "Lemon",
    price: 750.0,
  },
  {
    name: "Lime",
    price: 850.0,
  },
  {
    name: "Kiwi",
    price: 950.0,
  },
  {
    name: "Peach",
    price: 1050.0,
  },
  {
    name: "Pear",
    price: 1150.0,
  },
  {
    name: "Papaya",
    price: 1250.0,
  },
  {
    name: "Plum",
    price: 1350.0,
  },
  {
    name: "Raspberry",
    price: 1450.0,
  },
  {
    name: "Tomato",
    price: 1550.0,
  },
  {
    name: "Cucumber",
    price: 1650.0,
  },
  {
    name: "Onion",
    price: 1750.0,
  },
];

export const getProducts = (search) => {
  if (!search) return products;

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      String(product.price) === search.toLowerCase()
  );
};
