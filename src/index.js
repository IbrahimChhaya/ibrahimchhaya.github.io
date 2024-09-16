userInput = document.getElementById("userInput");
terminalOutput = document.getElementById("terminalOutput");

document.onkeydown = function(event) {
    if(event.key.length == 1 && userInput.innerHTML.length != 30) {
        userInput.innerHTML += event.key;
    }
    if(event.key == "Backspace" || event.key == "Delete") {
        userInput.innerHTML = userInput.innerHTML.slice(0, -1);
    }
    if(event.key == "Enter") {
        executeCommand(userInput.innerHTML);
    }
}

function executeCommand(input) {
    input = input.toLowerCase();

    output = `<div class="terminal-line"><span class="success">user@ibrahimchhaya.com:</span>
      <span class="directory">~</span> ${input}</div>`;
    if(!input in COMMANDS) {
        output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    }
    else {
        output += `<div class="output"> ${COMMANDS[input]} </div>`;
    }
    
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    userInput.innerHTML = ""
}

const COMMANDS = {
    help:
      'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
    about:
      "Hello 👋<br>I'm Ibrahim Chhaya",
    skills:
      '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Sass, Vue.js',
    education:
      "MSc Information Technology Privacy Engineering - Carnegie Mellon University",
    experience:
      "",
    contact:
      'You can contact me on',
    exit:
      "<span class='danger'>THERE IS NO ESCAPE</span>",
    quit:
      "<span class='danger'>THERE IS NO ESCAPE</span>"
  };