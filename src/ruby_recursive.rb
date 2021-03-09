def is_Palindrome?(word)
    if word.length <= 1
        return true
    end
    if word[0] != word[-1]
      #  puts false
        return false
    else 
    word.slice!(-1)
    word.slice!(0)
    # puts word
    return is_Palindrome?(word)
    end
end