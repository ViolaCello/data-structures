# Given an array and a Chunk size, 
# divide the array into many subarrays where 
# each subarray is of the provided size

def array_chunk(array, size)
    result = []
    index = 0
    while array.length > index do
        result.push(array.slice(index, index + size)) # see below for difference with .slice in Ruuby and JavaScript
        index += size
    end
    return result
end

# .slice in JavaScript = .slice(indexToBeginAt, indexToEndAt - 1)
# .slice in Ruby = .slice(index_to_begin_at, number of elements to return)