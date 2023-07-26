function searchCandies (searchString, maxPrice, candies) {
    const lowercaseSearch = searchString.toLowerCase();
    return candies
    .filter((candy) => candy.name.toLowerCase().startsWith(lowercaseSearch) && candy.price < maxPrice)
    .map((candy) => candy.name);
};

module.exports = searchCandies;