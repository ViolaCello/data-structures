# Trying same things in Ruby


# given a sorted array of #'s
#  return the index points of the first pair that = 0
def sum_zero(arr)
    left = 0
    right = arr.length
    right -=1
    while left<right do
         if arr[left] + arr[right] == 0
            return left, right
        elsif arr[left] + arr[right] > 0
            right-= 1
        else 
            left+=1
        end
    end
end
