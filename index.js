const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function addDot(dot) {
  let currentValue = display.value;

  // Find the last "number chunk" after the last operator
  let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();

  // If last number doesn't have a dot, allow adding one
  if (!lastNumber.includes(dot)) {
    // If display is empty or last char is operator, start with 0.
    if (currentValue === "" || /[\+\-\*\/]$/.test(currentValue)) {
      display.value += "0" + dot;
    } else {
      display.value += dot;
    }
  }
}

function calculateResult() {
  if (display.value === "" || display.value === "Error") {
    display.value = "";
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
}

function squareRoot() {
  let num = display.value;
  if (num === "error") {
    display.value = "";
  } else if (!num === "" || /[\+\-\*\/]$/.test(display.value) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.sqrt(num);
  }
}

function percentage() {
  let num = display.value;
  if (num === "error") {
    display.value = "";
  } else if (!num === "" || /[\+\-\*\/]$/.test(display.value) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = num / 100;
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function changeSign() {
  let num = display.value;
  if (num === "" || isNaN(num)) {
    display.value = "";
  } else {
    display.value = -num;
  }
}

function square() {
  let num = display.value;
  if (num === "error") {
    display.value = "";
  } else if (!num === "" || /[\+\-\*\/]$/.test(display.value) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.pow(num, 2);
  }
}
