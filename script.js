function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  } else if(isNaN(value1) || isNaN(value2)){
        return false;
    }

  // Check if the types of the values are the same
 if( typeof value1 === typeof value2){
	 return true;
 }else{
	  return false;
 }
}
alert (isSameType(NaN, NaN));
