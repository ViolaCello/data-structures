#  Given an integer, return an integer that is the reverse of that integer
#  for example 
#  reverseInt(15) === 51
#  reverseInt(500) === 5
#  reverseInt(-15) === -51
#  resverseInt(-90) === -9

def reverseInt(n) 
    reversed = n.to_s.reverse.to_i
    return n.negative? ? reversed * -1 : reversed 
end