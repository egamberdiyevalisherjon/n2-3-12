let hourElem = document.querySelector(".hour");
let minuteElem = document.querySelector(".minute");
let secondElem = document.querySelector(".second");
let ampmElem = document.querySelector(".am-pm");
let weekDayElem = document.querySelector(".week-day");
let dateElem = document.querySelector(".date");
let monthElem = document.querySelector(".month");

function displayTime() {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hourElem.innerHTML = hour.toString(10).padStart(2, "0");
  minuteElem.innerHTML = minute.toString(10).padStart(2, "0");
  secondElem.innerHTML = second.toString(10).padStart(2, "0");
}

displayTime();
setInterval(displayTime, 1_000);

function displayAMPM() {
  let now = new Date();

  let hour = now.getHours();

  let ampm = "";

  if (hour < 12) {
    ampm = "A.M.";
  } else {
    ampm = "P.M.";
  }
  ampmElem.innerHTML = ampm;
}

displayAMPM();
setInterval(displayAMPM, 360_000);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

(function displayWeekDay() {
  let day = days[new Date().getDay()];

  weekDayElem.innerHTML = day;
})();

(function displayDate() {
  let now = new Date();

  let date = now.getDate().toString(10).padStart(2, "0");
  let month = (now.getMonth() + 1).toString(10).padStart(2, "0");

  dateElem.innerHTML = date;
  monthElem.innerHTML = month;
})();
