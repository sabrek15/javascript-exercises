const fibonacci = function(n) {
    let fib = [];
    fib.length = n+1;
    fib[0] = 0;
    fib[1] = 1;
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
