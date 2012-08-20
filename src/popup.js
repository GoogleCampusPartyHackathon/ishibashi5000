// Copyright 2012, <OWNER>: License details can be found in LICENSE.markdown.

function displayTime() {
  var clock = document.querySelector('#clock');
  clock.innerText = Date();
}

function main() {
  var clock = document.createElement('p');
  clock.id = "clock";
  clock.innerText = Date();
  document.body.appendChild(clock);
  setInterval(displayTime, 1000);
}

// Kick things off once the plugin's content loads.
document.addEventListener("DOMContentLoaded", function () {
  main();
});
