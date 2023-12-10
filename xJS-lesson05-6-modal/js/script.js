var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var buttonback = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  button.innerText = "You've got this!";
  modal.classList.add("show-modal");
});

buttonback.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
});
