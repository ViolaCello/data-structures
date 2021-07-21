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

const maxTotientOldWay = n => {
    let max = [0,0] // n is on left, Max avgTotient is on right 
    let currentTotient;
    let avgTotient;
    for (let i = 2; i<=n; i++) {
        if (!!isPrime(i)) {
            currentTotient = i - 1
        } else {
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

// Phi(A*B) = Phi(A) * PHI(B) !!!!! If and only is the GCD(A,B)=1
// Therefore, there should be a way to store all the answers to these, then retrieve them...
// So, let's try like this:
const maxTotient = n => {
    let tots = [null, null]
    let max = [0,0] // n is on left, Max avgTotient is on right 
    let avgTotient;
    for(let i = 2; i<=n; i++) {
        if (!!isPrime(i)) {
            tots[i] = i - 1
        } else if
            (!!primeFactors(i)) {
            let pf = primeFactors(i)
            if (gcd(pf[0], pf[1])===1) {
                tots[i] = tots[pf[0]] * tots[pf[1]]
                }
                else {
                    tots[i] = totient(i)
                } } 
                
                else {
                    tots[i] = totient(i)
                }
                avgTotient = i / tots[i]
                if (avgTotient >= max[1]) {
                    max[0] = i
                    max[1] = avgTotient
                }
            }
            return max
    }




// from Wiki
function isPrime(num) {
    if (num <= 3) return num > 1;
    
    if ((num % 2 === 0) || (num % 3 === 0)) return false;
    
    let count = 5;
    
    while (Math.pow(count, 2) <= num) {
      if (num % count === 0 || num % (count + 2) === 0) return false;
      
      count += 6;
    }
    
    return true;
  }

  const primeFactors = n => {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
  
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
   
    return factors;
    
  }

  // Euler 3
//   The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

