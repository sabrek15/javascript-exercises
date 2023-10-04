const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  let ans=0;
  let n = array.length;
  for(let i=0; i<n; i++){
    ans +=array[i];
  }
  return ans;
};

const multiply = function(array) {
  let ans=1;
  let n = array.length;
  for(let i=0; i<n; i++){
    ans *=array[i];
  }
  return ans;
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  let ans = 1
  while(a!=0){
    ans *= a;
    a--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
