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
            if j > Math.sqrt(n)
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
        end 
    end 
end


# NOW, USING THE FOLLOWING pseudocode: (from WikiPedia)
# algorithm Sieve of Eratosthenes is
#     input: an integer n > 1.
#     output: all prime numbers from 2 through n.

#     let A be an array of Boolean values, indexed by integers 2 to n,
#     initially all set to true.
    
#     for i = 2, 3, 4, ..., not exceeding √n do
#         if A[i] is true
#             for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
#                 A[j] := false

#     return all i such that A[i] is true.

def sieve_of_eratosthenes(n)
    return false if n<1
    primes = Array.new(n, true)
    primes.fill(nil, 0..1)
    index = 2 
    until index > Math.sqrt(n)
        if !!primes[index]
            j = index * 2
            while j <= n do 
                primes[j] = false 
                j = j + index 
            end
        end
        index += 1
    end
      # puts "Here are the prime numbers up to #{n}:"
    # primes.each_with_index {|p, i| puts i if !!p}
    result = []
    primes.each_with_index { | p,i| result.push(i) if !!p }
    return result
end

def eulers_totient(n)
    i = 0
    result = 1
    primes = sieve_of_eratosthenes(Math.sqrt(n))
    while i<primes.length do 
      temp = result * primes[i]
        if temp > n 
            break
        else 
            result = temp
            i += 1
        end
    end
    return result
end

def time_this
    times = []
    i=0
    while i<10000
        e = Time.now
        eulers_totient(10000000)
        f = Time.now - e 
        times.push(f)
        i += 1
    end
    puts times.sum / times.length
end