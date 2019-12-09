var soundButtons = document.getElementById("soundButtons");

var sounds = [
  "chimes_long.mp3",
  "click_clock_loop.mp3",
  "pop_10.mp3",
  "puff.mp3"
];

var names = ["chimes", "click", "pop", "puff"];

var soundElement = [];
//loop through all sounds and create audio tags
sounds.forEach((soundURL, idx) => {
  //the sound
  var newSound = new Audio("sounds/" + soundURL);
  //store each sound in an array for reference
  soundElement.push(newSound);

  //create the button to play the sound
  var newButton = document.createElement("button");
  newButton.innerHTML = names.value;
  //store the sound's index
  newButton.setAttribute("data-sound-id", idx);
  //add to page
  soundButtons.appendChild(newButton);
  //listen for a click on the button and invoke play sound function
  newButton.addEventListener("click", playSoundInArray);
});

function playSoundInArray(event) {
  //get sound index
  var soundIndex = Number(event.target.getAttribute("data-sound-id"));
  //get sound from array
  var selectedSound = soundElement[soundIndex];
  console.log(selectedSound);
}

// get audio tag
/*
var myAudio = document.getElementById("myAudio");

function playAudio() {
  myAudio.play();
}

function stopMainAudio() {
  myAudio.pause();
  myAudio.currentTime = 0;
}
*/
