import Alarm from "./Alarm.js";
import Clock from "./Clock.js";
import Stopwatch from "./Stopwatch.js";
import Timer from "./Timer.js";

customElements.define("x-alarm", Alarm);
customElements.define("x-clock", Clock);
customElements.define("x-stopwatch", Stopwatch);
customElements.define("x-timer", Timer);

const alarmSound = document.querySelector("#alarm-sound");
const timerSound = document.querySelector("#timer-sound");

document.addEventListener("ring", () => {
  if (alarmSound.paused) {
    alarmSound.play();
  }
});

document.addEventListener("stop", () => {
  timerSound.play();
});
