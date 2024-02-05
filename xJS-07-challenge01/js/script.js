var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};