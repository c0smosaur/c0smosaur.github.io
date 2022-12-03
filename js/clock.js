const clock = document.querySelector("h2#clock");
const calendar = document.querySelector("h3#calendar");

const week = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

function getDate(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const wkday = week[date.getDay()];
    calendar.innerText = `${year}.${month}.${day} ${wkday}`;  
}

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
getDate();
setInterval(getClock,1000);