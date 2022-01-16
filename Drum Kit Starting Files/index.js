var numberOfDrumButtons = document.querySelectorAll(".drum").length; //FIX NUMBER OF TIMES BUTTON WANT TO REPEAT BY USING .length METHOD AND SAVED IT INTO A VARIABLE
for (i = 0; i < numberOfDrumButtons; i++) { //FOR LOOP CONTINUE UNTILL  index of drum button class EQUALS Number of Button
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML); //button animation mouse click ill call chhythu
        }
    );
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key); //button animation keyboard press ill call chhythu
}
);

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            tom4.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            snare.play();
            break;
        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            kickbass.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3"); //THIS new Audio HELPS TO CREATE NEW HTML AUDIO TAG
            crash.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); //press chyeenne key select aaakki
    activeButton.classList.add("pressed"); //active key lekk puthiya class aaya pressed add chyythu 
    setTimeout(function () {
        activeButton.classList.remove("pressed"); //100 milisec shesham pressed class ne remove chyythu
    }, 100);

}