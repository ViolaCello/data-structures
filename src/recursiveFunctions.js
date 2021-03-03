onScreen("This is in Recursive")

function recursiveSum(n) {
    if (n <= 1) {
        return n
    } else {
        onScreen("Inside recusiveSum, n=")
        onScreen(n)
        return (n + recursiveSum(n-1))
    }
}

let ex = recursiveSum(11)
onScreen(ex)

function factorial(n) {
    if (n===1) return 1
    return n * factorial(n-1)
}

let factor = factorial(3)
onScreen(factor)

// return the power of the base component recusively
// basically, Math.pow(x,y)
function power(base, exponent){
    if(exponent === 0) return 1
    return base * power(base,exponent-1)
}

// productOfArray using recusion
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange - adds numbers from 0 to n
function recursiveRange(n) {
    if (n===0) return 0
    return n + recursiveRange(n-1)
}