// JS REVIEW PROBLEMS


for (let i = 0; i < 25; i++) {
  console.log('*');
}
for (let i = -10; i <= 5; i++) {
  console.log(i);
}
for (let i = -50; i <= 50; i=i+4) {
  console.log(i);
}
for (let i = 0; i <= 5; i++) {
  if(i == 2){
    console.log('TWO');
  }
  else if(i == 4){
    console.log('FOUR');
  }
  else{
    console.log(i);
  }
  
}
let stopPoint = prompt("Pick a number to stop counting at.");
let stopPointParsed = parseInt(stopPoint);
for (let i = 1; i <= stopPointParsed; i++) {
  console.log(i);
}


// DOM MANIPULATION
let conatainer = document.querySelector('#container');
let content = document.createElement('div');
content.textContent = "Let's review DOM!";
conatainer.appendChild(content);
content.className = 'content';




// create an array for all of the secret words to be randomly chosen from
// choose a word at random and display it with hidden letters
// listen to a user input for a guessed letter
// check to see if letter is in secret word
// reveal letter if it is in word
// draw part of stick figure if letter is not in array
// keep track of incorrect guesses
// keep track of revealed letters and end game when all are revealed



// HANGMAN GAME 
let secretWords = ['alabama','elephant','helicopter','fresh','parachute','icy','yummy','zombie','balloon','indoctrination'];

function startPhase(){
  let randomIndex = Math.floor(Math.random()*(secretWords.length));
  document.querySelector('#secret-word').textContent = secretWords[randomIndex];
}
startPhase();
