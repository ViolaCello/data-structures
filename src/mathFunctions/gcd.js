// Greatest Common Divisor

const gcd = (a,b) => {
    let larger = Math.max(a,b)
    let smaller = Math.min(a,b)
    let temp;
    while (smaller > 0) {
        temp = (larger%smaller)
        larger = smaller
        smaller = temp
       // console.log(larger, smaller, temp)
    }
    return larger
}

// Euler's totient function

const totient = n => {
    let relativelyPrime = []
    let rp;
    for (let i = 1; i<n; i++) {
        rp = gcd(i,n)
        if (rp==1) relativelyPrime.push(i)
    }
    return relativelyPrime.length
}

// find highest value of n <= 1,000,000 for which n/titient is maximum

const maxTotient = n => {
    let max = [0,0] // n is on left, Max avgTotient is on right 
    let currentTotient;
    let avgTotient;
    for (let i = 2; i<=n; i++) {
        currentTotient = totient(i)
        avgTotient = i / currentTotient
        if (avgTotient >= max[1]) {
            max[0] = i
            max[1] = avgTotient
        }
    }
    return max 
}