const sumAll = function(a, b) {
    let sum = 0;
    if(a.isnum()&&b.isnum()){
        for(let i=a; i<=b; i++){
            sum += i;
        }
        return sum;
    } else {
        return "ERROR!";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
