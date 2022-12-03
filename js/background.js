const images = [
    'destiny2_dreaming_city(2).jpg', "destiny2_dreaming_city.jpg","destiny2_edz.jpg","destiny2_europa(2).jpg","destiny2_europa.png","destiny2_io(2).jpg",
    "destiny2_io.jpg","destiny2_last_city.jpg","destiny2_moon.jpg","destiny2_nessus.jpg", "destiny2_rasputin.jpg", "gotham_city.jpg", "new_york_city.jpg",
    "new_york_street.jpg","new-york-city-above.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.id = 'background';
// bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url("img/${chosenImage}")`;


// document.body.appendChild(bgImage);