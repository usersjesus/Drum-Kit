// Makes sound after button being clicked
window.addEventListener("DOMContentLoaded", function() {
    let numberOfDrumButtons = document.querySelectorAll("button").length;

    for (let i=0; i<numberOfDrumButtons; i++) {
    
        document.querySelectorAll("button")[i].addEventListener("click", function () {
            
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        
          });
        }
    
    });
    
// Makes sound after keyboard key being press
document.addEventListener("keydown", function (e) {

    makeSound(e.key);
    buttonAnimation(e.key);

});

// Method to make sound depending on button 
function makeSound (key) {
            
    switch (key) {
      case "w":
          let tom1 = new Audio ("sounds/tom-1.mp3");
          tom1.play();
          break;

      case "a":
          let tom2 = new Audio ("sounds/tom-2.mp3");
          tom2.play();
          break;

      case "s":
          let tom3 = new Audio ("sounds/tom-3.mp3");
          tom3.play();
          break;

      case "d":
          let tom4 = new Audio ("sounds/tom-4.mp3");
          tom4.play();
          break;

      case "j":
          let snare = new Audio ("sounds/snare.mp3");
          snare.play();
          break;

      case "k":
          let crash = new Audio ("sounds/crash.mp3");
          crash.play();
          break;

      case "l":
          let bass = new Audio ("sounds/kick-bass.mp3");
          bass.play();
          break;
    
      default:
          console.log(this.innerHTML);
          break;
    };

  }

// Animates the button when clicked or key is pressed
function buttonAnimation (currentKey) {

    let pressedButton = document.querySelector("." + currentKey);

    pressedButton.classList.add("pressed");

    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 110);

}





