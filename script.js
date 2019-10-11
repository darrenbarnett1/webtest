
let number = 0;
function startTimer(){
    setInterval(function(){ document.getElementById("demo").innerHTML = number + "%" + 12 + " = " + number%12; number++;}, 1000);
}
