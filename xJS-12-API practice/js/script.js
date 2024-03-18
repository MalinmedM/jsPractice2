const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

const getData = async function(numUsers){ //modifying when making numUsers parameter
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); //modifying to get result of numUsers
    const data = await usersRequest.json();
    
    const userResults = data.results; //array of objects

    displayUsers(userResults);
};

getData(1); //modifying with numUsers installed to number 1

const displayUsers = function(userResults){
    randomFolks.innerHTML = ""; //emptying contents to  not duplicate DOM elements

    for (let user of userResults){
        let name = user.name.first;
        let country = user.location.country;
        let imageURL = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageURL} alt="User avatar" />`;

        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});