# The classic FizzBuzz coding challenge
#console.log all numbers from 1 through n
# if its a multiple of 3, log 'fizz' instead of the number
# if its a multiple of 5, log 'buzz'
# if its a multiple of 3 and 5, log 'fizzbuzz'

def fizz_buzz(n)
    i = 1
    until i>n
        if i%15==0 
            puts "fizzbuzz"
        elsif 
            i%5==0
            puts "buzz"
        elsif  
            i%3==0
            puts "fizz"
        else 
            puts i
        end
        i +=1
    end
end