function displayQuote(response) {
  console.log("Quote generated");
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function quotesGenerate(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#user-instruction");
  let apiKey = "ob34054454b30351baa30f0fdftfa28b";
  let prompt = `User instruction: Generate a four line motivational quote on ${userInstruction.value}`;
  let context =
    "You are a motivational companion and prefer giving short qoutes.Make sure to follow the user instruction when generating a quick qoute.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let qoutesElement = document.querySelector("#quotes");
  qoutesElement.classList.remove("hidden");
  qoutesElement.innerHTML = `<div class = "generating"> Generating motivational quote about ${userInstruction.value} </div>`;

  console.log("Generating quote...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quotesFormElement = document.querySelector("#motivational-quotes-form");
quotesFormElement.addEventListener("submit", quotesGenerate);
