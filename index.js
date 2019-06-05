//detecting buttonPress
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // this.style.color="white"; //here this keyword refers to the current button which got clicked
//     // Constructor function with first letter of name capital
// function HouseKeeper(yearOfExperience, name, cleaningRepertoire){
//     this.name=name;
//     this.yearOfExperience=yearOfExperience;
//     this.cleaningRepertoire=cleaningRepertoire;
//     this.clean = function(){
//         alert("cleaning in progress....");
//     }
// }

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

}
// var audio= new  Audio('sounds/crash.mp3');
// audio.play();

// //detecting keyboard press
// function anotherAddEventListener(typeOfEvent , callback){
// //detect event code
// var eventThatHappened={
// eventType:"keypress",
// eventduration: 2,
// key: "p"
// }
// if(eventThatHappened.eventType===typeOfEvent)
// callback(eventThatHappened);
// }
// anotherAddEventListener("keypress",function(event){
// console.log(event);
// });
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);

}


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default: console.log(buttonInnerHtml);

  }

}
