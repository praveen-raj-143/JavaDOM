let c = document.getElementById("text");
console.log(c.innerText);

let P = document.getElementsByTagName("h1")
console.log(P[1].innerText);

let d = document.getElementsByClassName("box");
console.log(d[0].innerText);

let f = document.getElementById("chan")
f.innerText="Hello World";

let cards = document.getElementById("cards");
let btnElement= document.getElementById("btn");
let btn1Element= document.getElementById("btn1");
btnElement.addEventListener("click",function(){
    cards.style.flexDirection="column";
})
btn1Element.addEventListener("click",function(){
    cards.style.flexDirection="row";
})

let g = document.getElementById("heading");
g.style.color="red";

let h = document.getElementById("hi");
let button = document.getElementById("change");

button.addEventListener("click",function(){
    h.innerText = "Welcome to Elevation academy";
})


function timer(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // console.log(hrs, min, sec);
    document.getElementById("clock").innerHTML  = `${hrs} : ${min} : ${sec}`
    
}

setInterval(timer, 1000);

let selectElement=document.getElementById("dot");
let output=document.getElementById("ou")
selectElement.addEventListener("change",function(event){
    // console.log(event.target.value);
    // console.log(event.target.selectedOptions[0].innerText);
    output.innerText="Selected : "+ event.target.selectedOptions[0].innerText;
})

