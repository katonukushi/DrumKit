
var drums = document.querySelectorAll(".drum");


drums.forEach(drum => {
    drum.addEventListener("click", function () {
        playSound(drum.innerHTML);
        animate(drum.innerHTML);
    })    
});

document.addEventListener("keydown", function(event){
    playSound(event.key);
    animate(event.key);
})


function animate(letter) {
    var button = document.querySelector("." + letter);
    if (button != null) {
        button.classList.add("pressed");
        setTimeout(function (){
            button.classList.remove("pressed")
        }, 150)

    }
    
}

function playSound(letter) {
    var audio = null;
    switch(letter) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("No such keypress");                
    }
    if (audio != null) {
        audio.play();
    }
    
}
