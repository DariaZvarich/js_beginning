class ShoppingBasket {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        this.discount = discount;
    }

    addItem(candy) {
        this.items.push(candy);
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.items.forEach((candy) => {
            totalPrice += candy.getPrice();
        });

        return totalPrice - this.discount;
    }
}

module.exports = ShoppingBasket;