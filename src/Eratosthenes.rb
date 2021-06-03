# Sieve of Eratosthenes

# To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:

# Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
# Initially, let p equal 2, the smallest prime number.
# Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
# Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
# When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.

def eratosthenes(n)
    i=0
    primes = []
    while i<=n 
        primes.push(i)
        i += 1
    end
    p = 2
    while p<n 
        i = p * 2
        while i<=n 
            primes[i] = false
            i = i + p
        end #end "i" While
        j = p + 1
        while j<=n 
            if j==n 
                primes.shift()
                primes.shift()
                k = 0
                while k<primes.length
                    if !primes[k]
                        primes.slice!(k)
                        k -= 1
                    end
                    k += 1
                end
                puts "Here are the all the prime numbers up to #{n}:"
                return primes.map {|prime| puts prime}
            end
            if !!primes[j] 
                p = primes[j]
                break
            end
            j += 1
        end #ends "j"
    end #ends "p" WHILE
end