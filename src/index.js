function displayPoem(response){
  console.log("poem generated"); 
    //response.data.answer will have poem in it
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}



function  generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "9117d16f27ad34748062df20bto34069";
    let prompt = `User  instructions are :Generate an English poem about${instructionsInput.value}`;
    let context ="You are a nature poem expert and love to write short poems.Sign you poem with 'SheCodes AI'inside a <strong> element  .Do not show html format.Seperate each line with <br / Your misson is to generate a 4 line poem formatted basic HTML. Only follow user instructions";
    let apiURL =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 //BUILD API URL
 //CALL THE API (define as a function)
 let poemElement = document.querySelector("#poem");
 poemElement.classList.remove("hidden");
 poemElement.innerHTML = `<div class="generating">⏳ Generating the English poem about ${instructionsInput.value}</div>`;


 console.log ("Generating poem");
 console.log(`Prompt: ${prompt}`);
 console.log(`Context: ${context}`);

 axios.get(apiURL).then(displayPoem);
 //DISPLAY GENERATED POEM  
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);