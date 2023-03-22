document.getElementById("mainTitle").innerText = "Point and click adventure"

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    mainCharacter.style.left = x+"px";
    mainCharacter.style.top = y+"px";
    
    
    console.log(x + " " + y);
}