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
function countUniqueValues(arr){
    let collection = {}
      for (let count of arr) {
          collection[count] = collection[count] + 1 || 1
      }
      return Object.keys(collection).length
  }

  // however, we can also count the unique values in a sorted array using two pointers, 
  // one starting at the 0 index and one starting at the 1 index, and if they are unique,
  // populate the array with the unique value.  At the end of the array, return the index of the final unique value + 1

  function countUniqValues(arr) {
      if (arr.length == 0) {
          return 0
      } // otherwise, due to the way we write this, a 0 would return a 1

  }