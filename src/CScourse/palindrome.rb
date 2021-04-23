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

