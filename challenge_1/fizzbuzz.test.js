// test - if number devide on 3, return Fizz

const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns "Fizz" for a number devisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
    });


// test - if number devide on 5, return Buzz

    it('returns "Buzz" for a number devisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
    });


// test - if number devide on 15, return FizzBuzz

    it('returns "FizzBuzz" for a number devisible by 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        expect(fizzbuzz(45)).toBe('FizzBuzz');
    });
// test - if number not devided on 3, 5 and 15, then return this number

    it('returns number by itself for numbers not devisible by 3, 5, 15', () => {
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(7)).toBe(7);
        expect(fizzbuzz(11)).toBe(11);
});


})