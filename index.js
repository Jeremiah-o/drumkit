for(var k=0;k<document.querySelectorAll(".drum").length ; k++){
    document.querySelectorAll("button")[k].addEventListener("click", press)
    function press(){
        soundt(this.innerHTML);
        anime(this.innerHTML);
    } 
    }
document.addEventListener("keypress", board)
 function board(){
    soundt(event.key);
    anime(event.key);
}

function soundt(keyb){
    switch (keyb) {
    case 'w':
        var audio= new Audio("./tom-1.mp3")
        audio.play();
        break;
    case "a":
        var audio= new Audio("./tom-2.mp3")
        audio.play();
        break;
    case "s":
        var audio= new Audio("./tom-3.mp3")
        audio.play();
        break;
    case 'd':
        var audio= new Audio("./tom-4.mp3")
        audio.play();
        break;
    case 'j':
        var audio= new Audio("./snare.mp3")
        audio.play();
        break;
    case "k":
        var audio= new Audio("./kick-bass.mp3")
        audio.play();
        break;
    case 'l':
        var audio= new Audio("./crash.mp3")
        audio.play();
        break;
    default: console.log(keyb);       
}
}

function anime(bat){
 document.querySelector("."+bat).classList.add("pressed");
 setTimeout(function(){
    document.querySelector("."+bat).classList.remove("pressed");
 },100);
}