const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

describe('Candy', () => {
    it('should return the correct name and price', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toEqual('Mars');
        expect(candy.getPrice()).toEqual(4.99);
    });
});

describe('ShoppingBasket', () => {
    it('should return total price 0 for an empty basket', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });

    it('should return the correct price after adding items to the basket', () => {
        const candy1 = { getName: () => 'Mars', getPrice: () => 4.99 };
        const candy2 = { getName: () => 'Skittle', getPrice: () => 3.99 };

        const basket = new ShoppingBasket();

        basket.addItem(candy1);
        expect(basket.getTotalPrice()).toEqual(4.99);

        basket.addItem(candy2);
        expect(basket.getTotalPrice()).toEqual(8.98);

        basket.addItem(candy2);
        expect(basket.getTotalPrice()).toEqual(12.97);
    });

    it('should apply the discount to the total price', () => {
        const candy1 = new Candy('Mars', 4.99);
        const candy2 = new Candy('Skittle', 3.99);

        const basket = new ShoppingBasket();

        basket.addItem(candy1);
        basket.addItem(candy2);

        basket.applyDiscount(2.0);
        expect(basket.getTotalPrice()).toEqual(11.97);
    });
});