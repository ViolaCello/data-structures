// The classic FizzBuzz coding challenge
// console.log all numbers from 1 through n
// if its a multiple of 3, log 'fizz' instead of the number
// if its a multiple of 5, log 'buzz'
// if its a multiple of 3 and 5, log 'fizzbuzz'

function fizzBuzz(n) {
    for (let i = 1; i<=n; i++) {
        if ( !(i%3) && !(i%5)) {
            console.log("fizzbuzz")
        } 
        else if 
        ( !(i%5) ) {
            console.log("buzz")
        } else if
        ( !(i%3)) {
            console.log("fizz")
        } else 
        console.log(i)
    }
}