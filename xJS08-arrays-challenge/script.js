var hobbies = ["writing", "loving", "having fun", "skiing", "coding", "movies"];
hobbies.pop();
hobbies.push("music");
hobbies.splice(2, 2, "cooking", "creating");
hobbies.shift();
hobbies.unshift("singing");
//console.log(hobbies[2]);
//console.log(hobbies);

var goals = ["writing", "living", "laughing"];
var allTheThings = goals.concat(hobbies);
console.log(allTheThings.indexOf("creating"));
allTheThings.splice(6, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
