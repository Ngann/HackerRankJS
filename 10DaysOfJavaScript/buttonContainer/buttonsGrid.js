let numbers = [1,2,3,6,9,8,7,4]
let ids=[1,2,3,6,9,8,7,4]
let buttonFive = document.getElementById('btn5');

buttonFive.onclick = function(){
    numbers.unshift(numbers.pop())
    for (i = 0; i <= 7 ; i ++){
        document.getElementById('btn'+ ids[i]).innerHTML = numbers[i];
        // console.log(ids[i],numbers[i])
    }
    
}



//increment 5 only
// var button = document.getElementById('btn5');
// var number = 5;
// button.onclick = function(){
//     number += 1;
//     button.innerHTML =  number;
// }