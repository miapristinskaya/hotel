let buttonsCall = document.querySelectorAll(".button_call");
let overlay = document.querySelector(".overlay");
let callback = document.querySelector(".callback");

buttonsCall.forEach(function (button_call) {
  button_call.addEventListener("click", function () {
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});

callback.addEventListener("click", function (e) {
  e.stopPropagation();
});
