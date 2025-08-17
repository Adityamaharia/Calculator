const display = document.getElementById("display");

// Append a value (number or operator) to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display (reset to "0")
function clearDisplay() {
  display.value = "";
}

// Add a decimal point only if the current number chunk doesn’t already have one
function addDot(dot) {
  let currentValue = display.value;

  // Get the last number after the most recent operator
  let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();

  // Only add dot if this number chunk doesn't have one yet
  if (!lastNumber.includes(dot)) {
    // If empty or last char is an operator, start with "0."
    if (currentValue === "" || /[\+\-\*\/]$/.test(currentValue)) {
      display.value += "0" + dot;
    } else {
      display.value += dot;
    }
  }
}

// Calculate and display the result
function calculateResult() {
  if (display.value === "" || display.value === "error") {
    display.value = "";
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "error";
    }
  }
}

// Calculate square root of the displayed number
function squareRoot() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.sqrt(num);
  }
}

// Convert number to percentage
function percentage() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = num / 100;
  }
}

// Handle backspace to remove the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Change the sign of the current number (positive to negative or vice versa)
function changeSign() {
  let num = display.value;
  if (num === "" || isNaN(num)) {
    display.value = "";
  } else {
    display.value = -num;
  }
}

// Calculate the square of the displayed number
function square() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.pow(num, 2);
  }
}
