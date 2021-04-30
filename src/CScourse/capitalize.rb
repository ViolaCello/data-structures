def capitalize(str)
    str[0] = str[0].upcase!
    i = 1
    while i<str.length do
        if str[i].ord == 32 && str[i+1] == str[i+1].downcase
            str[i+1] = str[i+1].upcase!
            i += 2
        else 
            i += 1
        end
    end
    return str
end