

var buttons = document.querySelectorAll(".drum");



buttons.forEach(element => {
    element.addEventListener("click",function(){
        sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
});


document.addEventListener("keypress", function(event){
    sound(event.key);
    buttonAnimation(event.key);
})

function sound(letter){
   if(letter=="w"){
    playSound("./sounds/crash.mp3");
   } 
   if(letter=="a"){
    playSound("./sounds/kick-bass.mp3");
   }
   if(letter=="s"){
    playSound("./sounds/snare.mp3");
   }
   if(letter=="d"){
    playSound("./sounds/tom-1.mp3");
   }
   if(letter=="j"){
    playSound("./sounds/tom-2.mp3");
   }
   if(letter=="k"){
    playSound("./sounds/tom-3.mp3");
   }
   if(letter=="l"){
    playSound("./sounds/tom-4.mp3");
   }
}

function playSound(fileName){
    var audio = new Audio(fileName)
    audio.play();
}

function buttonAnimation(currentkey){
   var activeButton = document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");
   setTimeout(() =>{
    activeButton.classList.remove("pressed");
    
   },100);

}