# Write a function that accepts a positive number (N).  The function should console log a step shape
# with N levels uing the # character.  Make sure the step has spaces on the right side.

def steps(n)
    str = ""
    i = 1
    while i<=n do
        j = 1
        while j<=i do
            str = str + "#"
            j += 1
        end
        if str.length != n 
            k = str.length + 1
            while k<=n do
                str = str + ' '
                k += 1
            end
        end
        puts str
        i += 1
        str = ""
    end
end