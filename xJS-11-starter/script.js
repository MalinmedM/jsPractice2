const createOutfit = function(){
    const outfit = {
        shirt: "green",
        pants: "blue",
        isNew: false,
        showOff: function(){
            this.isNew = true;
            console.log("Show-off your brand new outfit!");
        }
    };
    return outfit;
};

console.log(createOutfit());