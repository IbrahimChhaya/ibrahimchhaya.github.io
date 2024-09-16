window.userInput = document.getElementById("userInput");
terminalOutput = document.getElementById("terminalOutput");
document.getElementById("dummyKeyboard").focus();

function myFunction(event) {
    let key = event.key;
    if(key.length == 1) {
       window.userInput.innerHTML += key;
    }
    if(event.keyCode == 8 || event.keyCode == 46) {
        window.userInput.innerHTML = window.userInput.innerHTML.slice(0, -1);
    }    
}