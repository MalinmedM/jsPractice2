/*Exercise 1:
const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 8,
  totalChapters: 23
};

console.log(currentlyReading.title);
console.log(currentlyReading["pages"]);

currentlyReading.awards = "Hugo Award for Best Novel (2016)";
currentlyReading.upddateChapter = function(chapterNum) {
  this.currentChapter = chapterNum;
};


currentlyReading.updateChapter (11);
console.log(currentlyReading);

//Exercise 2: */
const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  }
};

bird.eat = function(){
  if (this.hungerScale === 0){
    console.log(`${this.name} is full and doesn't want more food!`);
  } else {
      this.hungerScale -= 1;
      console.log("Nom nom nom nom nom!")
    }
};

bird.eat();
console.log(bird.isHappy());