db = db.getSiblingDB("zfuel");

// Drop existing collections
db.onlineordercategories.drop();
db.onlineorderproducts.drop();

// Insert categories
db.onlineordercategories.insertMany([
  { name: "Hot Drinks", imgSrc: "Latte.png" },
  { name: "Cold Drinks", imgSrc: "Cold Drinks Large.png" },
  { name: "Food", imgSrc: "a half eaten pie.png" },
  { name: "Make it a Combo", imgSrc: "Combo.png" },
]);

// Insert products
db.onlineorderproducts.insertMany([
  {
    name: "Classic sausage roll",
    category: "Food",
    inStock: true,
    imageSource: "food/classic_sausage_roll.png",
  },
  {
    name: "Gourmet bacon and egg",
    category: "Food",
    inStock: true,
    imageSource: "food/gourmet_bacon_and_egg.png",
  },
  {
    name: "Gourmet buttered chicken pie",
    category: "Food",
    inStock: true,
    imageSource: "food/gourmet_buttered_chicken_pie.png",
  },
  {
    name: "Mince and cheese pie",
    category: "Food",
    inStock: true,
    imageSource: "food/mince_and_cheese_pie.png",
  },
  {
    name: "Spinach and feta roll",
    category: "Food",
    inStock: true,
    imageSource: "food/spinach_and_feta_roll.png",
  },
  {
    name: "Cappuccino",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/cappuccino.png",
  },
  {
    name: "Chai latte",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/chai_latte.png",
  },
  {
    name: "Flat white",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/flat_white.png",
  },
  {
    name: "Fluffy",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/fluffy.png",
  },
  {
    name: "Ginger bread latte",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/ginger_bread_latte.png",
  },
  {
    name: "Hot-chocolate",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/hot_chocolate.png",
  },
  {
    name: "Latte",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/latte.png",
  },
  {
    name: "Lemon ginger honey",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/lemon_ginger_honey.png",
  },
  {
    name: "Long black",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/long_black.png",
  },
  {
    name: "Matcha latte",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/matcha_latte.png",
  },
  {
    name: "Mochachino",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/mochachino.png",
  },
  {
    name: "Short black",
    category: "Hot Drinks",
    inStock: true,
    imageSource: "hotDrinks/short_black.png",
  },
  {
    name: "Banana berry smoothie",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/banana_berry_smoothie.png",
  },
  {
    name: "Banofee frappe",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/banofee_frappe.png",
  },
  {
    name: "Chocolate frappe",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/chocolate_frappe.png",
  },
  {
    name: "Coffee frappe",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/coffee_frappe.png",
  },
  {
    name: "Foam frappe",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/foam_frappe.png",
  },
  {
    name: "Foam macchiato",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/foam_macchiato.png",
  },
  {
    name: "Hokey Pokey Frappe",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/hokey_pokey_frappe.png",
  },
  {
    name: "Iced americano",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/iced_americano.png",
  },
  {
    name: "Iced chocolate",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/iced_chocolate.png",
  },
  {
    name: "Iced gingerbread latte",
    category: "Cold Drinks",
    inStock: true,
    imageSource: "coldDrinks/iced_gingerbread_latte.png",
  },
]);
