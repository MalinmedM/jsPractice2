var test = document.querySelector("h3");

var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase__size">today</span>';
var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";

var firstImage = document.querySelector("img");
firstImage.source = "img/lulu.jpeg";
firstImage.alt = "Lulu bouquet";
console.log(firstImage);

var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu";
firstCaption.innerHTML = "The <strong>Lulu</strong>";
