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

