class ShoppingBasket {
    constructor() {
        this.items = [];
    }

    addItem(candy) {
        this.items.push(candy);
    }

    getTotalPrice() {
        return this.items.reduce((total, candy) => total + candy.getPrice(), 0);
    }
}

module.exports = ShoppingBasket;