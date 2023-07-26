const { Candy, ShoppingBasket } = require('./shoppingapp'); // Adjust the path based on your file structure

const candy1 = new Candy('Mars', 4.99);
const candy2 = new Candy('Skittle', 3.99);

const basket = new ShoppingBasket();

basket.addItem(candy1);
basket.addItem(candy2);
basket.addItem(new Candy('Skittle', 3.99));

console.log('Total Price:', basket.getTotalPrice());