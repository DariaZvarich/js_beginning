const multiple = require('./multiple');

describe('multiple', () => {
    it('multiple 3 and 2', () => {
        expect(multiple(3, 2)).toBe(6);
    })
})