function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  } else if (value1 === value2){
	  return true;
  } else{
	  return false;
  }
}
alert(isSameType(value1, value2));
