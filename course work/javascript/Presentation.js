// Creates a countdown on a webpage from 5 to 0
let countdown = 5;
let countdownElement = document.getElementById('countdown');

//updating the countdown every second
let countdownInterval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
}, 1000);

//After 5 seconds redirects the user to the "Home.html" page
setTimeout(function() {
    window.location.href = "Home.html";
  }, 5000);