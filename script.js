function isSameType(value1, value2) {
  if(isNaN(val1) && isNaN(val2)){
        return true;
    } else if(typeof val1=== typeof val2){
        return true;
    }else{
        return false;
    }
}
alert(isSameType(NaN, NaN));
