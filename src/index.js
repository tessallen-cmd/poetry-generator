function  generatePoem(event){
    event.preventDefault();
   
   
    
new Typewriter("#poem", {
  strings: "Nature is the forest, with its many shades of green",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);