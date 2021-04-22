// Given an integer, return an integer that is the reverse of that integer
// for example 
// reverseInt(15) === 51
// reverseInt(500) === 5
// reverseInt(-15) === -51
// resverseInt(-90) === -9

function reverseInt(int) {
    return (parseInt(int.toString().split('').reverse().join(''))) * Math.sign(int)
}