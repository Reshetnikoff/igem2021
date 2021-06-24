const countDownDate = new Date("Nov 8, 2021 00:00:00").getTime();
const timer = document.getElementById("timer");

// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".timer").innerHTML = `<div class="timer__item">
      <span class="timer__num">${days}</span>
      <span class="timer__text">дней</span>
    </div>
    <div class="timer__item">
      <span class="timer__num">${hours}</span>
      <span class="timer__text">часов</span>
    </div>
    <div class="timer__item">
      <span class="timer__num">${minutes}</span>
      <span class="timer__text">минут</span>
    </div>
    <div class="timer__item">
      <span class="timer__num">${seconds}</span>
      <span class="timer__text">секунд</span>
    </div>`;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer").innerHTML = "EXPIRED";
  }
}, 1000);