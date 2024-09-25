function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Object.is(value1, NaN) && Object.is(value2, NaN)) {
    return true;
  } else if (typeof value1 === typeof value2){
	  return true;
  } else{
	  return false;
  }
}
alert(isSameType(NaN, NaN));
