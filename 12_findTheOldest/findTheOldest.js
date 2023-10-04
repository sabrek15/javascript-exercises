const findTheOldest = function(array) {
    return array.reduce((oldest, currentperson) => {
        const oldestage = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentage = getAge(currentperson.yearOfBirth,currentperson.yearOfDeath);
        return oldestage < currentage ? currentperson : oldest;
    });
};

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
