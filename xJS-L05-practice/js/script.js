var title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's party!";
  title.style.color = "maroon";
});

var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});

/*var lightModeButton = document.querySelector(".light-mode");

lightModeButton.addEventListener("click", function () {
  theme.classList.remove("dark-palette");
});*/
