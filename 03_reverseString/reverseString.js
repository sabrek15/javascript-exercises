const reverseString = function(word) {
    let word_reverse = "";
    let n = word.length;
    for(let i=n-1; i>=0; i--){
        word_reverse += word[i];
    }
    return word_reverse;
};

// Do not edit below this line
module.exports = reverseString;
