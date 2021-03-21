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

# Merge two sorted arrays
def merge(arr1, arr2)
    result = []
    i = 0
    j = 0
    while i<arr1.length && j<arr2.length do 
        if arr1[i]<=arr2[j]
            result.push(arr1[i])
            i += 1
        else 
            result.push(arr2[j])
            j += 1
        end
    end
    while i<arr1.length do
        result.push(arr1[i])
        i += 1
    end
    while j<arr2.length do
        result.push(arr2[j])
        j += 1
    end
    return result
end

def merge_sort(arr)
    if arr.length<=1 
        return arr
    end
    mid = (arr.length/2).floor
    left = merge_sort(arr.slice(0,mid))
    right = merge_sort(arr.slice(mid, arr.length))
    return merge(left, right) 
end

def pivot(arr, start=0, last = arr.length-1)
    def swap(arr, index1, index2)
        temp = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = temp
    end
    pivot = arr[start]
    swap_idx = start
    i = start+1
    while i<=last do
        if pivot>arr[i]
            swap_idx += 1
            swap(arr, swap_idx, i)
        end
        i += 1
    end
    swap(arr, start, swap_idx)
    return swap_idx
end

def quick_sort(arr, left = 0, right = arr.length-1)
    if left<right
        pivot_index = pivot(arr, left, right)
        quick_sort(arr, left, pivot_index-1)
        quick_sort(arr, pivot_index+1, right)
    end
    return arr
end


# beginning Radix Sort
# helper method to find n-th digit of an integer
# interger % 10 = last digit, so x amount of times
def get_digit(num, place)
    num = num.abs()
    i = place
    while i>1 do 
        num = num / 10
        i -= 1
    end
    return num % 10
end

def digit_count(n)
    if n == 0 
        return 1
    end
    return (Math.log10(n.abs)).floor()+1
end

def most_digits(arr)
    max = 0
    arr.each_with_index do |v, i|
        if (digit_count(v) > max)
            max = digit_count(v)
        end
    end
    return max
end

def radix_sort(arr)
    if contains_mixed(arr) 
        mixed_array = split(arr)
        positive = radix_sort(mixed_array[0])
        negative = radix_sort(mixed_array[1])
        return negative.concat(positive)
    end
    loop = most_digits(arr)
    i = 0
    while i<loop do 
        bucket = Array.new(10).map{ |e| [] }
        j = 0
        while j<arr.length do 
            final_number = get_digit(arr[j], i)
            bucket[final_number].push(arr[j])
            j += 1
        end

        arr = [].concat(*bucket)
        i += 1
    end
    return arr
end

def contains_mixed(arr)
    positive = 0
    negative = 0
    for a in arr do
        if a>=0
            positive += 1
        else 
            negative += 1
        end
        if positive>0 && negative >0
            return true
            break
        end
    end
    return false 
end

def split(arr)
    positive = []
    negative = []
    for a in arr do 
        if a>=0
            positive.push(a)
        else 
            negative.push(a)
        end
    end
    return [positive, negative]
end