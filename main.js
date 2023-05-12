let button = document.querySelector(".booking_button");
let overlay = document.querySelector(".overlay");
let callback = document.querySelector(".callback");

button.addEventListener("click", function () {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});

callback.addEventListener("click", function (e) {
  e.stopProapagation();
});
