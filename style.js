var character = document.getElementById('by');
var block = document.getElementById('block');

function jump(){
    if(by.classList != "animate"){
        by.classList.add('animate');
    }
    setTimeout(function(){
        by.classList.remove("animate")
    },1000)
}

var checkDead = setInterval(function(){
    
   var characterTop= parseInt(window.getComputedStyle(by).getPropertyValue("top"));

   var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));

   if(blockLeft < 70 && blockLeft > 0 && characterTop >70)
   {
       block.style.animation = "none";
       block.style.top = "160px";
       block.style.left ="70px";
       by.style.display = "none";     
       alert(" You lose refresh page to play again!!...");
   }
}, 10)