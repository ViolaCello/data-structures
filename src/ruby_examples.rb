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

# binary search
def binary_search(arr, value)
    left = 0
    right = arr.length - 1
    mid = ((left+right)/2).floor
    if arr[mid]==value 
        puts mid
        return mid
    end
    puts "line 10"
    while arr[mid]!=value && left<=right do
    mid = ((left+right)/2).floor
       puts "line 12"
       puts "left", left
       puts "right", right
       puts "mid", mid
        if left==right-1
            if arr[left]==value
                puts "The result is,",left
                return left
            elsif  
                arr[right]==value
                puts "The result is, ",right
                return right
            else 
                puts -1
                return -1
            end
puts "line 28"
        end
        puts "line 30"
        if arr[mid]==value
            puts "The result is=", mid
            return mid
        elsif  
            value<arr[mid]
            right = mid
        else 
            left=mid
        end
    end
    puts "last line, -1"
    return -1
end

def naiveStringSearch(string, frag) 
    count = 0
    s = string.length - 1
    f = frag.length - 1
    for i in 0..s do 
        for j in 0..f do 
          if frag[j] != string[i+j]
            break
          elsif j==f 
            count += 1
        end
    end
  end
  return count
end

def bubble_sort(arr)
    for array in arr do
        j=0;
        while j<arr.length-1 do
            if arr[j]>arr[j+1]
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            end
            j += 1
        end
    end
    return arr 
end

# bubbleSort with better optimization
def bubble_sort_optimized(arr) # best for mostly sorted arrays
    i = 0
    while i<arr.length do 
        swap = false
        j = 0
        while j<arr.length - 1 - i do 
            puts arr
            if arr[j]>arr[j+1]
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = true
            end
            j += 1
        end
        if !swap 
            break
        end
        i += 1
        puts "end Cycle"
    end
    puts arr
    return arr
end

def selection_sort(arr) 
    arr.each_with_index do |val, index | 
        min = index
        j = index + 1
        while j<arr.length do
            if arr[j]<arr[min]
                min = j
            end
            j+=1
        end

        if arr[index]>arr[min]
            temp = arr[index]
            arr[index] = arr[min]
            arr[min] = temp
        end
    end
    return arr
end


def insertion_sort(arr) # best for sorting information feeding in live/streaming
    arr.each_with_index do |v, i| 
        current_value = arr[i]
        j = i-1
        while j>=0 && arr[j] > current_value do 
            arr[j+1] = arr[j]
            arr[j] = current_value
            j -= 1
        end
    end
    return arr 
end