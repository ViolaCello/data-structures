// Given an array and a Chunk size, 
// divide the array into many subarrays where 
// each subarray is of the provided size

function chunk(array, size) {
    let result = []
    for (arr of array) {
        if (!result[-1] || result[-1].length==size) {
            result.push([arr])
        } else {
            result[-1].push(arr)
        }
    }
    return result
}