const generateMessages = (names) => {
    return names.map((name) => {
        return `Hi ${name}! 50% off our best candies for you today!`;
    });
    };

const generateMessages_1 = (namesAndDisacounts) => {
    return namesAndDisacounts.map((customer) => {
        return `hi ${customer.name}! ${custumore.discount}% off our best candies for you today`;
    });
    };


module.exports = generateMessages;

const namesAndDisacounts = [
    {name: 'Anna', discount: 50 },
    {name: 'Laura', discount: 40 },
    {name: 'Josh', discount: 30 },
    {name: 'Min', discount: 50 },
    {name: 'Karla', discount: 60 },
];

console.log(generateMessages(namesAndDisacounts));