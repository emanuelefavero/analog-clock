const secondHand = document.getElementById('secondHand');
const minuteHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');

setInterval(clockRotating, 1000);

function clockRotating() {
    const date = new Date();
    const getSeconds = date.getSeconds() / 60;
    const getMinutes = date.getMinutes() / 60;
    const getHours = date.getHours() / 12;

    secondHand.style.transform = 'rotate(' + getSeconds * 360 + 'deg)';
    minuteHand.style.transform = 'rotate(' + getMinutes * 360 + 'deg)';
    hourHand.style.transform = 'rotate(' + getHours * 360 + 'deg)';

    // CURRENT DAY, EXAMPLE: "Fri Jun 11 2021"
    document.getElementById('currentDay').innerHTML = date.toDateString();
}
