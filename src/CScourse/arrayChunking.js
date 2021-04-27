// Given an array and a Chunk size, 
// divide the array into many subarrays where 
// each subarray is of the provided size

function chunk(array, size) {
    let result = []
    for (arr of array) {
        let prev = result[result.length - 1]
        if (!prev || prev.length==size) {
            result.push([arr])
        } else {
            result[result.length - 1].push(arr)
        }
    }
    return result
}

function chunkSlice(array, size) {
    
}