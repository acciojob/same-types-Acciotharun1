function isSameType(value1, value2) {
  if (Number.is(value1, NaN) && Number.is(value2, NaN)) {
    return true;
  } else if (!Number.isNaN(val1) && !Number.isNaN(val2) && typeof val1 === typeof val2){
    return true;
  } else {
    return false;
  }
}
alert(isSameType(NaN, NaN));
