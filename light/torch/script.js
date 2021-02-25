var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

if (document.body.style.filter === undefined) {
  document.querySelector(".Unsupported").style.display = "block";
}

/* ------- */
var state = 0;
var hideOnboarding = false;
var onboardingElement = document.querySelector(".Onboarding");
var clickSound = new Audio("./click.mp3");
var powelinesSound = new Audio("./power.mp3");
var eventName =
  "ontouchstart" in window ||
  (window.DocumentTouch && document instanceof DocumentTouch)
    ? "touchstart"
    : "click";

clickSound.volume = 0.2;
powelinesSound.volume = 0.05;

function toggle() {
  state = !state;
  clickSound.play();
  powelinesSound[state ? "play" : "pause"]();
  document.body.classList.toggle("on");

  if (hideOnboarding) {
    onboardingElement.classList.add("hide");
    hideOnboarding = false;
  }
}

function loopSound() {
  if (state) {
    powelinesSound.play();
  }
}

function visibilityHandler() {
  if (this[hidden]) {
    if (state) {
      powelinesSound.pause();
    }
    return;
  }

  if (state) {
    powelinesSound.play();
  }
}

function run() {
  document.body.addEventListener(eventName, toggle, false);
  powelinesSound.addEventListener("ended", loopSound, false);
  toggle();
  hideOnboarding = true;
  onboardingElement.classList.remove("hide");
}

document.addEventListener(visibilityChange, visibilityHandler, false);

setTimeout(run, 2000);
