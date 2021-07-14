# division only using addition
# return an object with quotent and remainder if not 0, 1, or false
def divide(dividend, divisor)
    return false if divisor==0
    return 0 if dividend==0
    return dividend if divisor==1
    return 0 if dividend < divisor
    return 1 if dividend==divisor
    count = 0
    div = dividend
    while true do 
      count += 1
      return {"quotent":count, "remainder":(div-divisor)} if (div - divisor) < divisor
      div = div - divisor
    end
end