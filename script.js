function isSameType(value1, value2) {
  if (typeof value1 === 'number' && isNaN(value1) && typeof value2 === 'number' && isNaN(value2)) {
    return true;
  } else if (typeof value1 === typeof value2){
    return true;
  } else {
    return false;
  }
}
alert(isSameType(NaN, NaN));
