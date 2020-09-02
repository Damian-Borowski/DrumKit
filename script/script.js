const buttons = document.querySelectorAll("button");

class Drum {
    constructor(src){
    this.sound = new Audio(src);
}
    play(){
        this.sound.play()
    }
}

const handleColor = () => {
    let firstColor = Math.floor(Math.random() * 255) + 1;
    let secondColor = Math.floor(Math.random() * 255) + 1;
    let thirdColor = Math.floor(Math.random() * 255) + 1;
    document.body.style.background = `rgb(${firstColor},${secondColor},${thirdColor})`;
}

const handleSound = (e) => {
    const snare = new Drum ("sounds/snare.mp3");
    const bass = new Drum ("sounds/bass.mp3");
    const hiHat = new Drum ("sounds/hihat.mp3");
    const ride = new Drum ("sounds/ride.mp3");
    const crash = new Drum ("sounds/crash.mp3");
    const tomOne = new Drum ("sounds/tomone.mp3");
    const tomTwo = new Drum ("sounds/tomtwo.mp3");
    const floorTom = new Drum ("sounds/floortom.mp3");
    handleColor();
    switch(e) {
        case "w":
            snare.play();
        break;
        case "q":
            bass.play();
        break;
        case "e":
            hiHat.play();
        break;
        case "r":
            ride.play();
        break;
        case "t":
            crash.play();
        break;
        case "y":
            tomOne.play();
        break;
        case "u":
            tomTwo.play();
        break;
        case "i":
            floorTom.play();
        break;
        default:
            console.log("Ups!Something is wrong"); 
        }
}

for (let i = 0 ; i < buttons.length; i++ ) {
    buttons[i].addEventListener("click", function() {
        let buttonValue = this.innerHTML;
        handleSound(buttonValue);
    });
}

document.addEventListener("keypress", function(e) {
    const currentKey = e.key;
    handleSound(currentKey)
})