# fastest way
def is_palindrome?(word)
    return word==word.reverse
end

# solution without using .reverse()
def is_palindrome?(word)
    reversed = ""
    word.each_char { |letter| reversed = letter + reversed }
    return word == reversed
end

# using multiple pointers
def is_palindrome?(word)
    i = 0
    j = (word.length) - 1
    while i<j
        return false if word[i] != word[j]
        i +=1
        j -=1
    end
    return true
end