const { multiply } = require('../functions');

test('num1 and num2 should multiply', () => {
  expect(multiply(3, 5)).toBe(15);
});
