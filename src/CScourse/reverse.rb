# reverse a string

# easiest way
def reverse(string)
    return string.reverse
end

# alternate
def reverse_string(string)
    result = ""
    string.each_char { |char| result = char + result }
    return result
end

def reverse_another_string(string)
    result = ""
    string.split('').each { |char| result = char + result}
    return result
end