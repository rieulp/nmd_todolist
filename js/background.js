const images = ["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "img_5.jpg", "img_6.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];


const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add('bg');

document.body.appendChild(bgImage);

