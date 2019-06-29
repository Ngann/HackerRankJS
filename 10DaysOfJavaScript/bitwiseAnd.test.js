const {sArray, decimalToBinary, binaryToDecimal, getMaxLessThanK } = require('./bitwiseAnd');


test('give n return s as an array up to n', () => {
  expect(sArray(5)).toStrictEqual([1,2,3,4,5]);
});

test('give an integer return binary array', () => {
expect(decimalToBinary(1)).toEqual('1');
});

test('give an integer return binary array', () => {
expect(decimalToBinary(4)).toEqual('100');
});

test('binary array return integer', () => {
expect(binaryToDecimal('100')).toEqual("4");
});

test('give n and k, return max bitWise And', () => {
  expect(getMaxLessThanK(5,2)).toEqual(1);
  });