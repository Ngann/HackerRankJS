// // Math Operators

// function onCLick(btn,fn){
//     btn.addEventListener('click', fn);
// }

// function setOp(btn, op){
//     onCLick(btn, () => resizeBy.innerText += op);
// }

// // element Id are global
// // Do not need to use btnSub = document.getElementById('btnSub')
// // Not the best way because we're using global variables
// setOp(btnSub, '-');
// setOp(btnSum, '+');
// setOp(btnMul, '*');
// setOp(btnDiv, '/');


// //Hash map to perform the correct operation
// const ops = {
//     '+': (a,b) => a + b,
//     '-': (a,b) => a - b,
//     '*': (a,b) => a * b,
//     '/': (a,b) => Math.floor(a/b),
// }

// onCLick(btnEql, function (){
//     // split words between digits and symbols
//     const [op1, operator, op2] = res.innerText.split(/\b/);
    
//     const [n1,n2] = [parseInt(op1, 2), parseInt(op2,2)];

//     res.innerText = Number(ops[operator](n1,n2)).toString(2);
// })


const onClick = (btn, fn) => btn.addEventListener('click', fn);

const setOp = (btn, op) => {
	onClick(btn, () => res.innerText += op);
}

setOp(btn0, '0');
setOp(btn1, '1');
setOp(btnSub, '-');
setOp(btnSum, '+');
setOp(btnMul, '*');
setOp(btnDiv, '/');

const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => Math.floor(a / b),
}

onClick(btnEql, () => {
   // split on word boundaries (e.g.between digits and symbols)
    const [op1, operator, op2] = res.innerText.split(/\b/);
    // use parseInt (base 2) to read string as binary integer
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
    // perform the desired operation then convert result into a string (base 2)
    res.innerText = Number(ops[operator](n1,n2)).toString(2);
});

onClick(btnClr, () => {
    res.innerText = null;
})