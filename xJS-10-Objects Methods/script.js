//Object properties
const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favouriteToys = ["spring", "ping pong balls", "bird stuffy"];
cat.pet = function() {
    return "purrrrrrr";
}

//Access with Dot notation
console.log(cat.age);
console.log(cat.favouriteToys[2]);

//Access with Bracket notation
console.log(cat["name"]);

const dog = {
    name: "Bianca",
    nickname: "Boobie",
    age: 6,
    isSleeping: false,
    favouriteToys: ["tennis ball", "squeeky toy", "cat"],
    pet: function() {
        return "groooowl";
    }
};

dog.isSleeping = true;
dog["color"] = "white";
console.log(dog);

//THIS keyword
cat.play = function(){
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`;
};

console.log(cat.play());

//Compound assignment operators
let paperClips = 10;
paperClips += 2;
console.log(paperClips);