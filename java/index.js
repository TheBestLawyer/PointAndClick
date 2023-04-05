document.getElementById("mainTitle").innerText = "Point and click adventure"

const offsetCharacter = 16;
const sec = 1000;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");

const nft = document.getElementById("nft");
let inventory = [];

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0){
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left
        var y = e.clientY - rect.top
    
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    
    
        console.log(e.target.id);
        switch (e.target.id) {
            case "tree1":
                showMessage(mainCharacterSpeech, characterAudio, "I want to burn it");
                break;
            case "rock1":
                showMessage(mainCharacterSpeech, characterAudio, "Rock!");
                break;
            case "Sil":
                if (!inventory.includes("nft")){
                    showMessage(mainCharacterSpeech, characterAudio, "Sil?");
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 3 * sec);
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Bring me the nft to win the game");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Yes sir");
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 12 * sec);
                } else{
                    showMessage(mainCharacterSpeech, characterAudio, "I bring thy artifact");
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 3 * sec);
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Such cash money, thank you");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Anytime sir");
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 12 * sec);
                }
                break;
            case "altar":
                if(!inventory.includes("nft")){
                    showMessage(mainCharacterSpeech, characterAudio, "I summoned the nft using my massive muscles");
                    inventory.push("nft");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "No need to summon anything more")
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }
                break;
            default:
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
    
        }
    }
} 

function showMessage(targetBubble, targetAudio, message) {
    targetAudio.currentTime = 0;
    targetAudio.play();
    targetBubble.innerHTML = message;
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}

function hideMessage(targetBubble, targetAudio) {
    targetAudio.pause();
    targetBubble.innerHTML = "...";
    targetBubble.style.opacity = 0;
}