class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
}
    getName() {
        return this.name;
}
    getPrice() {
        return this.price;
    }
}


class ShoppingBasket {
    constructor() {
        this.itemes = [];
    }

    addItem(candy) {
        this.itemes.push(candy);
    }

    getTotalPrice() {
        return this.itemes.reduce((total, candy) => total + candy.getPrice(), 0);
    }
}

module.exports = { Candy, ShoppingBasket };


// const Candy = require('./shoppingapp');

// const ShoppingBasket = require('./shoppingapp');

// const candy = new Candy('Mars', 4.99);
// console.log(candy.getName());
// console.log(candy.getPrice());

// const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());

// basket.addItem(candy);

// console.log(basket.getTotalPrice());

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// console.log(basket.getTotalPrice());

