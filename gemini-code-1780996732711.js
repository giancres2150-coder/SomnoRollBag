// TIMER DI COUNTDOWN REALE (24 ore dal caricamento per scopi demo)
let time = 24 * 60 * 60; 
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `L'offerta scade tra: ${hours}:${minutes}:${seconds}`;
    if (time > 0) {
        time--;
    }
}
setInterval(updateCountdown, 1000);

// GESTIONE FORM DI PREORDINE
function handleOrder(event) {
    event.preventDefault();
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}