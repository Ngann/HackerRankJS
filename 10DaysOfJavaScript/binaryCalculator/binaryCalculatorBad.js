// 1. get binary to show on res
// 2. perform simple calculations
// 3. operand1 -> operator -> operand2
// 4. Constraints, both operands will always be positive when convert from base-2 to base-10
// 5. All expressions will be valid
// 6. Optimize 

let inputArray = [];

function clickButton(e){
    let btn = e.target || e.srcElement
    if (btn.id == 'btn0' ){
        inputArray.push(0);
    } else if (btn.id == 'btn1' ){
        inputArray.push(1);
    } else if (btn.id == 'btnSum' ){
        inputArray.push("+");
    } else if (btn.id == 'btnSub' ){
        inputArray.push("-");
    } else if (btn.id == 'btnMul' ){
        inputArray.push("*");
    } else if (btn.id == 'btnDiv' ){
        inputArray.push("/");
    } else if (btn.id == 'btnClr' ){
        inputArray = [];
    }
    let binary = inputArray.join("");
    document.getElementById('res').innerHTML = binary;
}

//Decimal to Binary
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }
  
//Binary to Decimal
function binaryToDecimal(binary) {
return parseInt(binary, 2).toString(10);
}

let re = /[+,-,*,/]/;
function equal(){
let c = inputArray.join("")
let d = c.split(re)
let inputOne = parseInt(binaryToDecimal(d[0]));
let inputTwo = parseInt(binaryToDecimal(d[1]));
console.log("d1",inputOne , "d2", inputTwo);
let result = decimalToBinary(inputOne * inputTwo);
    document.getElementById('res').innerHTML = result;
}

//event listener that calls the action(e) when clicked
document.getElementById('btn0').addEventListener('click', clickButton);
document.getElementById('btn1').addEventListener('click', clickButton);
document.getElementById('btnClr').addEventListener('click', clickButton);
document.getElementById('btnEql').addEventListener('click', equal);
document.getElementById('btnSum').addEventListener('click', clickButton);
document.getElementById('btnSub').addEventListener('click', clickButton);
document.getElementById('btnMul').addEventListener('click', clickButton);
document.getElementById('btnDiv').addEventListener('click', clickButton);

// function action(e){
//     // uses event's target or srcElement properties to get the id of the clicked button and modify its innerHTML
//     var btn = e.target || e.srcElement;

//     // get clicked element's innerHTML
//     document.getElementById(btn.id).innerHTML++;
// }

//event listener that calls the action(e) when clicked
// document.getElementById('btn0').addEventListener('click', action);
// document.getElementById('btn1').addEventListener('click', action);


//onclick
// document.getElementById('btn1').onclick = action;
// document.getElementById('btn2').onclick = action;
// document.getElementById('btn3').onclick = action;
// document.getElementById('btn4').onclick = action;


// One way
// document.getElementById('btn1').onclick = function() {
//     document.getElementById('btn1').innerHTML++;
// };

// document.getElementById('btn2').onclick = function() {
//     document.getElementById('btn2').innerHTML++;
// };

// document.getElementById('btn3').onclick = function() {
//     document.getElementById('btn3').innerHTML++;
// };

// document.getElementById('btn4').onclick = function() {
//     document.getElementById('btn4').innerHTML++;
// };