const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function(){
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);

    selectRandomImage(images);
};

//Randomly select the index of an image
const selectRandomImage = function(images){
    const randomIndex = Math.floor(Math.random()*images.length);
    //Testing if it's pulling random whole number between 0 and 99
    //console.log(randomIndex);
    const randomImage = images[randomIndex];
    //Testing if i see a single random image object in the console
    //console.log(randomImage);
    displayImage(randomImage);
};

//Display the image
const displayImage = function(randomImage){
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function(){
    getImage();
});