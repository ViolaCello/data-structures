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
        if (i>2 && n%i===0) { continue }
        if (i>2 && n%2===0 && i%2===0) { continue }
        if (i>3 && n%3===0 && i%3===0) { continue }
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
    let primes = eratosthenes(Math.sqrt(n))
    for (let i = 2; i<=n; i++) {
        if (i>Math.sqrt(n)) {
            for (let j = 0; j<=primes.length; j++) {
                if (i%primes[j]===0) {
                    currentTotient = primes[j] - 1
                    break;
                }
            }
        } else if 
             (primes.includes(i)) {
            currentTotient = i - 1
        } else   {
        currentTotient = totient(i)
        }
        avgTotient = i / currentTotient
        if (avgTotient >= max[1]) {
            max[0] = i
            max[1] = avgTotient
        }
    }
    return max 
}

const eratosthenes = n => {
    // 1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
    const primes = []
    for (let i = 0; i<=n; i++) {
        primes.push(i)
    }
    // 2. Initially, let p equal 2, the smallest prime number.
    let p = 2
    while (p<n) {
    // 3. Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
        for (let i = p * 2; i<=n; i += p ) {
         primes[i] = false
         }
           // 4. Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
         for (let j = p+1; j<=n; j++) {
             if (j===n) {
        // 5. When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.   
                primes.shift()
                primes.shift()
                let k = 0
                while (k<primes.length) {
                    if (!primes[k]) {
                        primes.splice(k,1)
                         k--}
                         k++
                }
                return primes
             }
            if (!!primes[j]) {
               p = primes[j]
                break;
            }
         }
    }
}
