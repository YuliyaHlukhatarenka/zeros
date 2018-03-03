module.exports = function getZerosCount(number) {
  var fiveDegree = 1;
  var result = 0;
  while (Math.floor(number/(5*fiveDegree)>0)) {
    result = result + Math.floor(number/(5*fiveDegree));
    fiveDegree = fiveDegree*5;
    }
    return result;
}
