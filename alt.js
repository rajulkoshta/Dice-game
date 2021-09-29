var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
const reloadBtn = document.querySelector(".btn-secondary");
var heading = document.querySelector(".container h2");

var imageSource1 = "images/dice"+randomNumber1+".png";
var imageSource2 = "images/dice"+randomNumber2+".png";

dice1.setAttribute("src",imageSource1);
dice2.setAttribute("src",imageSource2);


if(randomNumber1 > randomNumber2){
    heading.textContent="player 1 won 🥳";
}
else if(randomNumber2 > randomNumber1){
    heading.textContent="player 2 won 🥳";
}
else{
    heading.textContent="Its a draw😅😅";
}

reloadBtn.addEventListener("click", refresh);
function refresh() {
    window.location.reload("Refresh");
}