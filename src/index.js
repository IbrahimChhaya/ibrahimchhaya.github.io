userInput = document.getElementById("userInput");
terminalOutput = document.getElementById("terminalOutput");
dummyInput = document.getElementById("dummyInput");

document.onkeydown = function(event) {
    if(event.key == "Enter" && userInput.innerHTML != "") {
        executeCommand(userInput.innerHTML);
        document.getElementById("dummyInput").value = "";
    }
}

// dummyInput.addEventListener('input', doInput);
// function doInput(e) {
  
//   if( e.inputType == "insertText"){
//     console.log( e.data );
//   }
  
//   if( e.inputType == "deleteContentBackward"){
//     console.log('Backspace');     
//   }
  
//   if( e.inputType == "insertCompositionText"){
//     console.log("meow" + e.data)
//   }
// }

function captureText() {
    text = document.getElementById("dummyInput").value;
    userInput.innerHTML = text;
}

// document.onkeydown = function(event) {
//   if(event.key.length == 1 && userInput.innerHTML.length != 30) {
//       userInput.innerHTML += event.key;
//   }
//   if(event.key == "Backspace" || event.key == "Delete") {
//       userInput.innerHTML = userInput.innerHTML.slice(0, -1);
//   }
//   if(event.key == "Enter" && userInput.innerHTML != "") {
//       executeCommand(userInput.innerHTML);
//   }
// }

// document.addEventListener('input', function(event){
//   console.log(event)
//   if(event.inputType == "deleteContentBackward") {
//       userInput.innerHTML = userInput.innerHTML.slice(0, -1);
//   }
//   else if(event.inputType == "insertParagraph" && userInput.innerHTML != "") {
//     executeCommand(userInput.innerHTML);
//   }
//   else if(event.data.length == 1 && userInput.innerHTML.length != 30) {
//     userInput.innerHTML += event.data;
//   }
// })

focusMethod = function getFocus() {           
    document.getElementById("dummyInput").focus();
}

function executeCommand(input) {
    input = input.toLowerCase();

    output = `<div class="terminal-line"><span class="code">user@ibrahimchhaya.com:</span>
      <span class="directory">~</span> ${input}</div>`;
    if(!(input in COMMANDS)) {
        output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    }
    else {
        output += `<div class="output"> ${COMMANDS[input]} </div>`;
    }
    
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    userInput.innerHTML = "";
    userInput.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

const COMMANDS = {
    help:
      `Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", 
      "<span class="code">projects</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]`,
    about:
      `Hi! 👋<br>I'm Ibrahim Chhaya. I am a Privacy Engineering student at Carnegie Mellon University. I was previously a software engineer, 
      but still code for fun. Check out my <span class="code">projects</span>.`,
    skills:
      `<span class="code">Languages:</span> Java, C#, C++, Python, HTML, CSS, JavaScript<br>
      <span class="code">Technologies:</span> Unity<br>
      <span class="code">Libraries/Frameworks:</span> Angular, React.js, Sass, Vue.js, SpringBoot<br>
      <span class="code">Privacy:</span> Data Protection/Privacy Impact Assessments, GDPR, US Data Privacy, POPIA, AI Governance<br>
      <span class="code">Certifications:</span> Certified Information Privacy Technologist (IAPP CIPT), Professional Scrum Product Owner I (PSPO I), 
      Professional Scrum Master I (PSM I)`,
    education:
      `MSc Information Technology Privacy Engineering - Carnegie Mellon University<br>
      BSc Hons Computer Science and Informatics - University of Johannesburg`,
    experience:
      `<h3>Software Developer (Jan 2023 - Aug 2023)</h3> 
      <ul> <li>Developed a medical aid/insurance comparison website from scratch, from design to deployment following 
      Agile methodologies and a Test Driven Development practice. Deployed applications on AWS and Azure.</li> 
      <li>Built microservice system architectures with Java and the Spring Boot framework for both REST and SOAP APIs.</li> 
      <li>Implemented web applications using React through Next.js and Angular, prioritizing privacy UX and compliance 
      with privacy regulations.</li> 
      <li>Mentored and coordinated a group of software development interns to deliver an in-house prototype solution.</li> </ul> 
      <h3>Teaching Assistant/Tutor (Feb 2021 - Dec 2022)</h3> 
      <ul> <li>Delivered practical tutorials on C++ and introductory computer science concepts.</li> 
      <li>Evaluated weekly-due practical VB.NET, HTML/CSS, C#, and C++ assignments, tests, 
      and exams for undergraduate students.</li> <li>Mentored second-year student Informatics project.</li> </ul> 
      <h3>Co-Founder and Lead Engineer (Mar 2014 - Dec 2022)</h3> <ul> 
      <li>Developed, designed, and maintained digital platforms for start-ups, educational institutions, 
      and community forums.</li> </ul> <h3>Founder (May 2013 - Nov 2016)</h3> <ul> <li>Founder of one of the leading 
      gaming media outlets in Africa, attracting over 100,000 monthly readers across digital channels.</li> 
      <li>Covered the world's largest video game events, including E3, Gamescom, and the Tokyo Game Show, as well as 
      local events rAge Expo and EGE SA.</li> <li>Negotiated large advertisement deals with game distributors for EA, 
      Activision, and Xbox.</li> </ul>`,
    contact:
      `Connect with me on <a target="_blank" href="https://www.linkedin.com/in/ibrahimchhaya/">LinkedIn</a>, 
      or view my projects on <a target="_blank" href="https://github.com/IbrahimChhaya/">GitHub</a>`,
    projects:
      `Check out my <a target="_blank" href="https://github.com/IbrahimChhaya/">GitHub</a><br>
      <span class="code">Enhancing Health Device Privacy with Federated Learning and k-Anonymity:</span> De-identified private health device dataset using 
      k-anonymity and utilised edge-device machine learning through Federated Learning to enhance user privacy<br>
      <span class="code">Plant App: </span> A Vue.JS and Quasar hybrid app to help keep track of plants at home. Used various AWS services to store and deploy<br>
      <span class="code">Immune Raider:</span> A serious game demonstrating AI powered by immunological algorithms and built using the Unity game engine. 
      Won Top 5 at the University of Johannesburg<br>
      <span class="code">3 Semester-Long Projects: </span> Emotion Recognition with Cat Tails, Comparison of Activation Functions in Galaxy Morphology
      Classification, and a mobile app to help officers preserve crime scene photographic evidence.<br>
      <span class="code">cura: </span> An Android and web application for children and psychologists. 
      Won Top 2 and Best Website at the University of Johannesburg's 2021 Projects Day under the Third-Year group project category<br>
      <span class="code">Green Pantry (2020): </span> A fully fledged grocery e-commerce website and 
      winner of the University of Johannesburg's 2020 Projects Day under the Second-Year group project category<br>
      <span class="code">Ball Roller Game (2019): </span> A mobile game created in the Unity game engine. 
      An infinite rolling game with dynamically generated platforms.`,
    meow: "meow",
    exit:
      "<span class='danger'>THERE IS NO ESCAPE</span>",
    quit:
      "<span class='danger'>THERE IS NO ESCAPE</span>"
};