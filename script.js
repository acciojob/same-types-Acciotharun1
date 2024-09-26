function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  } else if(Number.isNaN(value1) || Number.isNaN(value2)){
        return false;
    } else if( typeof value1 === typeof value2){
	 return true;
 }
}
alert (isSameType(NaN, 123));
