const createOutfit = function(){
    const outfit = {
        // replacing w parameters: shirt: "green",
        shirt: shirt,
        // replacing w parameters: pants: "blue",
        pants: pants,
        isNew: false,
        showOff: function(){
            this.isNew = true;
            console.log("Show-off your brand new outfit!");
        }
    };
    return outfit;
};

console.log(createOutfit());

/*creating new objects w factory functions
const tuesday = createOutfit();
tuesday.shirt = "white";
tuesday. pants = "black";
console.log(tuesday);
*/

//or just do it this way with parameters above:
const tuesday = createOutfit("white", "black");
console.log(tuesday);

const wednesday = createOutfit("green", "blue");
console.log(wednesday);

//Loop through keys only
for (let key in tuesday){
    console.log(key);
};

//Loop through values only
for (let key in tuesday){
    console.log(tuesday[key]);
};

//Loop through keys and values
for (let key in tuesday){
    console.log(key, tuesday[key]);
}

//Loop through multiple objects
const outfitArray = [tuesday, wednesday];
for (let outfit of outfitArray){
    console.log(outfit);
};

//Combineing for...of and for...in loops to isolate keys and values of multibple objects
for (let outfit of outfitArray) {
    for (let key in outfit){
        console.log(key, outfit[key]);
    }
};