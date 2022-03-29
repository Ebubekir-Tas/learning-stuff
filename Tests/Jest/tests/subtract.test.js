const { subtract } = require('../functions');

it('subtracts num1 and num2', () => {
    const result = subtract(2, 1);
    expect(result).toBe(1);
})