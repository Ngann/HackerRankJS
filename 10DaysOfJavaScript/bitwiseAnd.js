// Bitwise Operators
// https://www.hackerrank.com/challenges/js10-bitwise/problem

//Solution
// 1. get array of s given n
// 2. get the base two or binary for integers a and b, a < b
// 3. get the max bitwise And value less then given k integer
// AND means a and b equals 1 when both a and b are 1 bit

// Array of s given n
function sArray(n) {
  let s = [];
  for (let i = 1; i <= n; i++) {
    s.push(i);
  }
  return s;
}

//Decimal to Binary
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

//Binary to Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2).toString(10);
}

// Bitwise AND A And B
function bitwiseAnd(n) {
  let s = sArray(n);
  let aAndB = [];
  for (let a = 0; a < s.length; a++) {
    for (let b = 1; b < s.length; b++) {
      if (s[a] < s[b]) {
        let bitwise = s[a] & s[b];
        aAndB.push(bitwise);
        // console.log("a",s[a],"b",s[b], "bitwise", bitwise)
      }
    }
  }
  return aAndB;
}

//Max Bitwise less than K;
function getMaxLessThanK(n, k) {
  //get the array less than k
  let lessThanK = [];
  let aAndB = bitwiseAnd(n);
  for (let i = 0; i < aAndB.length; i++) {
    if (aAndB[i] < k) {
      lessThanK.push(aAndB[i]);
    }
  }

  //Get the largest value in an array
  let currentValue = 0;
  let largestValue = 0;
  for (let i = 0; i < lessThanK.length; i++) {
    if (lessThanK[i] > currentValue) {
      currentValue = lessThanK[i];
      // console.log("current:",currentValue)
      if (currentValue > largestValue) {
        largestValue = currentValue;
        // console.log("largest:",largestValue)
      }
    }
  }
  // console.log(largestValue)
  return largestValue;
}

getMaxLessThanK(5, 2);

module.exports = {
  sArray,
  binaryToDecimal,
  decimalToBinary,
  bitwiseAnd,
  getMaxLessThanK
};
