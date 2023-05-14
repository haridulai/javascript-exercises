const repeatString = function (text, iteration) {
  if (iteration < 0) {
    return "ERROR";
  }

  let message = "";

  for (let i = 0; i < iteration; i++) {
    message += text;
  }

  return message;
};

// Do not edit below this line
module.exports = repeatString;
