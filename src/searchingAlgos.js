// linear search

// replicate JavaScript .indexOf.  If value not found, return -1


function linearSearch(arr, item) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===item) {
            return i
        }
    } 
    return -1
}

// binary search

function binarySearch(arr, value){
    let left = 0
    let right = arr.length-1
    if (arr[left]===value) return left
    if (arr[right]===value) return right
    let result = 0
    while (result === 0) {
        let mid = ((right-left)/2).toFixed(0)
        if (arr[mid]===value) {
            result = mid
            return result
        }
        
    }
}