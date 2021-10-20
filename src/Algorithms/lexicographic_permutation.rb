


def next_lexicographic_permutation(data)
    return false if data.length < 2 # Don't even bother to run the code if there is nothing to run

# Step 1
# Find the highest index(i) where data[i] < data[i+1]. If one isn't found, then we are at the last lexicographic permutation.

    i = data.length - 2

    while i>=0 do
        
        if data[i] < data[i+1]
            break
        else 
            i -= 1
        end
        return false if i < 0 # This would mean that we are at final permutation.
    end

#Step 2
# Find the highest index j > i where data[j] > data[i]. We would not have been able to get to this spot if Step 1 above was not satisfied.

    j = data.length - 1

    while j > i do 
        break if data[j] > data[i]
        j -= 1
    end

    if j == i 
        j = i + 1    
    end

# Step 3
# Swap data[i] with data[j]
    swap(data, i, j) # use the helper function we created

 # Step 4
# Reverse the subarray from i+1 through to the last element of array x
  reverse(data, i+1) # use the helper function we created

  return data.join('') # return the information as a string not an array

end

def swap(arr, x, y)
    temp = arr[x] 
    arr[x] = arr[y]
    arr[y] = temp
end

def reverse(arr, i) # reverse arr from the i-position index to the end of the array
    if i>=arr.length-1
      return
    end
  
    j = arr.length - 1
    while i < j do 
      swap(arr, i, j)
      i+=1
      j-=1
    end
end

def print_all_lexicographic_permutations(data, first=true)
    return if !data # since running recursively, this is the base-case to terminate

    data = data.to_s.split('') # whether data is a string or integer, convert to string then array for each character/digit

    data.sort! if !!first # begin at the first lexicographic permutation the first time the method is called

    p data # print the current permutation of the array

    print_all_lexicographic_permutations(next_lexicographic_permutation(data), false)
    
end