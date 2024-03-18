const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    
    const userResults = data.results; //array of objects

    displayUsers(userResults);
};

getData();

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