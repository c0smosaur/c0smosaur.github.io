const API_KEY = "df2cff49a593ce1ee7c6f1f73a49d613";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.name} : ${data.weather[0].main}\nMIN ${data.main.temp_min}℃\nMAX ${data.main.temp_max}℃`;
    });
}

function onGeoError(){
    alert("Something's wrong, can't find you 🤔");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
