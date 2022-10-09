var count = 120;
var countInterval;

var onLoadCounter = function () {
  if (Cookies.get("count")) {
    count = Number(Cookies.get("count"));
  } else {
    Cookies.set("count", String(count));
  }
  document.getElementById("counter").innerHTML = count;
  document.getElementById("minutes").innerHTML = Math.floor(count / 60);
  if (count == 120) {
    document.getElementById("seconds").innerHTML = 0;
  } else if (count >= 60) {
    document.getElementById("seconds").innerHTML = count - 60;
  } else {
    document.getElementById("seconds").innerHTML = count;
  }

  var previousState = Cookies.get("state");
  if (previousState === "started") {
    start();
  }
};

var start = function () {
  countInterval = setInterval(function () {
    count -= 1;
    Cookies.set("count", count);
    Cookies.set("state", "started");
    document.getElementById("counter").innerHTML = count;
    document.getElementById("minutes").innerHTML = Math.floor(count / 60);
    if (count == 120) {
      document.getElementById("seconds").innerHTML = 0;
    } else if (count >= 60) {
      document.getElementById("seconds").innerHTML = count - 60;
    } else {
      document.getElementById("seconds").innerHTML = count;
    }
    document.getElementsByClassName("start")[0].disabled = true;
    document.getElementsByClassName("pause")[0].disabled = false;
    document.getElementsByClassName("reset")[0].disabled = false;
  }, 1000);
};

var pause = function () {
  Cookies.set("state", "paused");
  clearInterval(countInterval);
  document.getElementsByClassName("start")[0].disabled = false;
  document.getElementsByClassName("pause")[0].disabled = true;
};

var reset = function () {
  pause();
  count = 120;
  Cookies.set("count", count);
  document.getElementById("counter").innerHTML = count;
  document.getElementById("minutes").innerHTML = Math.floor(count / 60);
  if (count == 120) {
    document.getElementById("seconds").innerHTML = 0;
  } else if (count >= 60) {
    document.getElementById("seconds").innerHTML = count - 60;
  } else {
    document.getElementById("seconds").innerHTML = count;
  }
  document.getElementsByClassName("reset")[0].disabled = true;
};
