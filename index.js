
function sum(fromN, toN) {
  /*if (fromN === toN) {
    return fromN;
  }
  return fromN + sumToOne(fromN - 1,toN);*/
  if(fromN === toN){
    return toN;
  }
  return fromN + sum(fromN + 1,toN)
}

module.exports = sum;
