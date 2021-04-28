# Given an array and a Chunk size, 
# divide the array into many subarrays where 
# each subarray is of the provided size

def array_chunk(array, size)
    result = []
    index = 0
    while array.length > index do
        result.push(array.splice(index, index + size))
        index += size
    end
    return result
end