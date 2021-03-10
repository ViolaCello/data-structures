# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
# Return the running sum of nums.


def running_sum(nums)
    result = []
     result[0] = nums[0]
   nums.each_with_index do |n, i|
       if i!=0
           result.push(n + result[i-1])
       end
   end
    return result
end

# recreate indexOf
def linear_search(arr, item)
    for i in arr do
        if arr[i]==item
            return i
            break
        end
    end
   return -1
end