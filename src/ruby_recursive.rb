def is_Palindrome(word)
    if word.length <= 1
        return true
    end
    if word[0] != word[-1]
        return false
    end
    word.slice!(-1)
    word.slice(0)
    is_Palindrome(word)
end