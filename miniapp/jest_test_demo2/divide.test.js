const divide = require('./divide');
test("dividing 6 by 3 eq 2", () => {
    expect(divide(6, 3)).toBe(2);
});



describe('in the math global object', () => {
    describe('the random function', () => {
        it('should return a number', () => {
            expect(typeof Math.random()).toEqual('number');
            // expect(typeof Math.random()).toEqual('string');

        })
        it('should return a number between 0 and 1', () => {
            const randomNumber = Math.random();
            expect(randomNumber).toBeGreaterThanOrEqual(0);
            expect(randomNumber).toBeLessThan(1);
        })
    });

    describe('the round function', () => {
        it('should return a rounded value of 4.5 being 5', () => {
            expect(Math.round(4.5)).toBe(5);
        })
    });

})