// solve for the largest prime factor

const isPrime = num => {
   // if (num <= 3) return num > 1;
    
    if ((num % 2 === 0) || (num % 3 === 0)) return false;
    
    let count = 5;
    
    while (Math.pow(count, 2) <= num) {
      if (num % count === 0 || num % (count + 2) === 0) return false;
      count += 6;
    }
    
    return true;
  }

  const largestPrimeFactor = n => {
        if (!!isPrime(n)) return n
        for (let i = Math.ceil(n/2); i>1; i--) {
            // if (i % 2 === 0 || i % 3 === 0 || i % 5 ===0 || i % 7 === 0) { continue };
            if (!!isPrime(i)) {
                if ( n % i === 0) return i
           } 
        }
        return false
  }