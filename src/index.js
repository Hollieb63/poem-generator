

    function showAnswer(response){
      new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
    }
    
    function generatePoem(event){
      event.preventDefault();

   let instructionsInput=document.querySelector("#instructions");
let apiKey="f176dboa0e40a3602864ef25ecact0b3";
let prompt=`Please provide a short english poem about ${instructionsInput.value}`;
let context="You are a literary genius who specialises in english poetry. Your mission is to provide a four line poem in basic HTML. Do not include the poem title. Sign the poem at the end poem with <strong> 'SheCodes AI'</strong>. ";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(showAnswer);
let poemElement=document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="generating">⏳Generating an English poem about ${instructionsInput.value}...</div>`;
    }




let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
