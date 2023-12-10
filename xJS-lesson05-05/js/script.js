var button = document.querySelector(".show-cat");
//console.log(button.outerHTML);
var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});
