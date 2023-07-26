const Userbase = require('./UserBase');

const users = [
{ getNames: () => 'John Doe', length: () => 26 },
{ getNames: () => 'Jane Smith', length: () => 32 },
{ getNames: () => 'Michael Johnson', length: () => 41 },
];

const userBaseInstance = new Userbase(users);

console.log(userBaseInstance.count()); // Output: 3
console.log(userBaseInstance.getNames()); // Output: [ 'John Doe', 'Jane Smith', 'Michael Johnson' ]
console.log(userBaseInstance.getIntroductions()); // Output: [ 26, 32, 41 ]