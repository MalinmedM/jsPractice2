//function with no parameters
var startMyDay = function () {
  return `Time for coffee and a shower!`;
};

console.log(startMyDay());

//function with 1 parameters
var favouriteCookie = function (cookie) {
  return `My favourite cookie is ${cookie}`;
};

console.log(favouriteCookie("brownie"));

//function with 2 parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and I am a ${occupation}`;
};

console.log(introduce("Malin", "writer"));

//Function to Capture Input + condtional block
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations!");
  } else {
    console.log("Not bad, not bad, but let's try for more tomorrow!");
  }
};

hydrationFeedback();

//Conditionl block
