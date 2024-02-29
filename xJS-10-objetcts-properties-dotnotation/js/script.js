const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//Create an Object & Properties with Dot Notation
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
    "Build JS Programs", 
    "Get a great job", 
    "Feel confident", 
    "Build beautiful websites", 
    "Belong to a team",
];
learning.category = "Front End Development";
learning.topicImportance = "High";

//console.log(learning);

//Change and remove values
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

console.log(learning);

//Display text & remove a class
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");