// Count how many a’s in the string
// Get the length of the string
// Divide n by the length of the string
// Get the index of the remainder and count index with

function repeatedString(s, n) {
    let countA = 0;
    let result = 0;
    let remainder = n % s.length
    for(let i = 0 ; i < s.length; i ++) {
        if (s[i] == "a"){
            countA ++
        }
    }
    console.log("count a in string",countA)
        result =  countA * Math.floor(n/s.length) + remainder
    console.log("total a's given n", result)
    return result
}
let stringOne = 'aba'
let stringTwo = 'ebcdddafdfeffaddbceddebafbbebebbbcefcbcdfbaabecfaaeeaaffdfccffbdeeaabcfeecfcecbfebacefebdfaeedadebdf'
// given parameter s and n, return number of 'a' 
// s = string to repeat
// n = number of characters to repeat
repeatedString(stringOne, 10)  // correct
repeatedString(stringTwo, 561984209086) // wrong expected output is 78677789272
console.log("length of stringTwo",stringTwo.length)