# Given a string, return the character that is most commonly used in that string

def max_characters(string)
    characters = {}
    string.each_char do |char| 
        if !!characters[char]
            characters[char] = characters[char] + 1
        else 
            characters[char] = 1
        end 
    end
    max = 0
    max_char = ""
    characters.each do |key, value| 
        if value>max
            max = value
            max_char = key
        end
    end
    return max_char
end