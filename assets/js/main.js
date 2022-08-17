// VARIABLES
const output = document.querySelector("#output");
const result = document.querySelector("#result");
const keys = document.querySelectorAll("button");

keys.forEach((item) => {
  item.addEventListener("click", berechne);
});

function berechne() {
  let buttonText = this.innerText;

  // AC CLEARS OUTPUT
  if (buttonText === "AC") {
    output.innerText = "";
    result.innerText = "";
  }
  // C REMOVES LAST NUMBER
  else if (buttonText === "C") {
    output.textContent = output.textContent.substring(
      0,
      output.textContent.length - 1
    );
  } else if (buttonText === "=") {
    result.innerText = eval(output.innerText);
  }
  // every other buttons (1-10 and operators) -> show textcontent from buttons
  else {
    output.textContent += buttonText;
  }
}
