setInterval(setClock, 1000);

const hourPointer = document.querySelector('[data-hour-pointer]');
const minPointer = document.querySelector('[data-min-pointer]');
const secPointer = document.querySelector('[data-sec-pointer]');
const dateSpace = document.querySelector('.curr-date');

function setClock() {
    const currentDate = new Date();
    const getDay = currentDate.getDate();
    const getCurrMonth = currentDate.getMonth();
    const getCurrYear = currentDate.getFullYear();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secPointer, secondsRatio);
    setRotation(minPointer, minutesRatio);
    setRotation(hourPointer, hoursRatio);

    setDate(dateSpace, getDay, getCurrMonth, getCurrYear);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function setDate(element, currDay, currentMonth, currentYear) {
    element.textContent = currDay + "." + currentMonth + 1 + "." + currentYear;
}

setClock();

const a = new Date(); 
console.log(a.getMonth() + 1);