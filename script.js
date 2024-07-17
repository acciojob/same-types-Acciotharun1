function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }
  // Check if both values have the same type
  return typeof value1 === typeof value2;
}

// Prompt the user for input
let value1 = prompt("Enter First Value:");
let value2 = prompt("Enter Second Value:");

// Convert inputs to numbers if they are numeric strings
if (!isNaN(value1)) {
  value1 = parseFloat(value1); // parseFloat handles floating point numbers
}
if (!isNaN(value2)) {
  value2 = parseFloat(value2); // parseFloat handles floating point numbers
}

// Display the result
alert(isSameType(value1, value2));
