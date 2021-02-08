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