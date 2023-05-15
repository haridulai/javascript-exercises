const sumAll = function (firstNumber, lastNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
    return "ERROR";
  }

  if (firstNumber < 0 || lastNumber < 0) {
    return "ERROR";
  }

  if (firstNumber > lastNumber) {
    const tempNumber = firstNumber;
    firstNumber = lastNumber;
    lastNumber = tempNumber;
  }

  let totalSum = 0;

  for (let index = firstNumber; index <= lastNumber; index++) {
    totalSum += index;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;

// take 2 numbers 1,4
// loop from 1 to 4, adding each number
// return sum

// loop - for(let i=firstNumber; i<= lastNumber; i++){ totalSum +=firstnumber}
