document.getElementById("mainTitle").innerText = "Point and click adventure"

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    
    
    //console.log(x + " " + y);
    //switch(e.target.id){
        //case "tree1":
            //console.log("I want to burn it")
            //break;
        //case "rock1"
            //console.log("Rock!")
            //break;

    //}
}