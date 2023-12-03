/*var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

if (weekday === "Thursday") {
  console.log("Let's get the week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work");
} else if (weekday === "Wednesday") {
  console.log("Worky work");
} else if (weekday === "Friday") {
  console.log("Worky work");
} else if (weekday === "Monday") {
  console.log("Worky work");
} else {
  console.log("WEEKEND!!!");
}
*/
var time = new Date().getHours();
console.log(time);

var greeting = "Hi";
var name = "Malin";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good aternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}
alert(greeting + ", " + name + "!");
