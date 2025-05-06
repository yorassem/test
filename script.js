 
const display = document.getElementById("display");

  function appendValue(value) {
    if (display.innerText === "0") display.innerText = "";
    display.innerText += value;
  }

  function appendFunction(func) {
    let functionMap = {
      sqrt: "Math.sqrt(",
      sin: "Math.sin(",
      cos: "Math.cos(",
      tan: "Math.tan(",
    };
    display.innerText += functionMap[func];
  }

  function clearDisplay() {
    display.innerText = "0";
  }

  function deleteLast() {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText = "0";
    }
  }

  function calculate() {
    try {
      let result = eval(display.innerText);
      display.innerText = result;
    } catch (error) {
      display.innerText = "Erreur";
    }
  }