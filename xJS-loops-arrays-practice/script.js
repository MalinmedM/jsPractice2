/*var timeOfDay = [6, "noon", "morning", 13, 17, "night"];
timeOfDay.forEach(function (time, index) {
  console.log(`The ${time} element is at position ${index}.`);
});
*/
var employeeAges = [32, 33, 16, 29, 67, 55, 40];
var adultAge = employeeAges.filter(function (item) {
  return item >= 30;
});
console.log(adultAge);
