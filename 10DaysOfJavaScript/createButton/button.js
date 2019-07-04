var button = document.getElementById('btn');
var number = 0;
button.onclick = function(){
    number += 1;
    button.innerHTML =  number;
}