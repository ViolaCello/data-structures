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
    if (arr.length === 0) {
        return 0
    } // otherwise, due to the way we write this, a 0 would return a 1
    let i = 0;
    for (let j=1; j<arr.length; j++) {
        if(arr[i]!=arr[j]) {
            i++
          arr[i] = arr[j]
          
        }
    }
    return i + 1
}

// write a function that returns true/false if the two intergers have the same freqencey of digits
// ex: 182, 281 -> true
// 34, 14 -> false
// 22, 222 -> false

function sameFrequency(a,b){
    let aa = a.toString()
    let bb = b.toString()
    if (aa.length != bb.length) {
        return false
    }
    
  }
  