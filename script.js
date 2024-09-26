function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types of the values are the same
  return typeof value1 === typeof value2;
}
alert(isSameType(NaN, NaN));
