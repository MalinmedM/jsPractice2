var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/* Log out each element with even-numbered indexes.
stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
  console.log(`${item}`);
  }
});
*/

/* Create function that will remove an element from an array
var removeItem = function(array, item) {
  var index = array.indexOf(item);
  if (index = -1) {
    console.log(`No such element exists.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "blankets");
connsole.log(stuff)
removeItem(stuff, "hairspray");
console.log(stuff)
*/

/*pushing items with s to empty array
var esses = [];

for (var item of stuff){
  if (item.includes("s")){
    esses.push(item);
  }
};

console.log(esses);
*/

var filteredEsses = stuff.filter(function(item) {
  return item.includes("s");
});

console.log(filteredEsses);