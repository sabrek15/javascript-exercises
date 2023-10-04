const convertToCelsius = function(f) {
  let cel = (f-32)*(5/9);
  let round = Math.round(cel * 10) / 10;
  return round;
};

const convertToFahrenheit = function(c) {
  let fah = c*(9/5) + 32;
  let rounded = Math.round(fah * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
