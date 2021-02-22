// given a sorted array of #'s
// return the index points of the first pair that = 0

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left<right) {
        if (arr[left] + arr[right] == 0) {
            return [left, right]
        } else if  (arr[left] + arr[right] > 0) {
            right--
        } else {
            left++
        }
    }
}

// given a sorted array, count the unique values and return that #
function countUniqValues(arr) {
    let collection = {}
    let result = arr.length
    for (count of arr) {
        collection[count] = collection[count] + 1 || 1
    }
    for 
}