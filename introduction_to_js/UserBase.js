class Userbase {
    constructor(arrayOfNames) {
        this.users = arrayOfNames; 
    }

    count() {
        return this.users.length;
    }
    getNames() {
        return this.users.map((user) => user.getNames());
    }
    getIntroductions() {
        return this.users.map((user) => user.length());
    }
}

module.exports = Userbase;
const Userbase = require('./UserBase');
const arrayOfNames = ['John', 'Jane', 'Michael'];
const user = new Userbase(arrayOfNames);

console.log(user.count());
console.log(user.getNames());
console.log(getIntroductions());
