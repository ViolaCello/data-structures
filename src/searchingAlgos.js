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