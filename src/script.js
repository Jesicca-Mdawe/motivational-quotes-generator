function quotesGenerate(event) {
  event.preventDefault();

  new Typewriter("#quotes", {
    strings: "i.e Success, Hopes and Dreams",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quotesFormElement = document.querySelector("#motivational-quotes-form");
quotesFormElement.addEventListener("submit", quotesGenerate);
