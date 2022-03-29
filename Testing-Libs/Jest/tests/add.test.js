const { add } = require('../functions');

it ("should add num1 and num2", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
})

