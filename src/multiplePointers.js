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
    if (aa===bb) {
        return true
    }
    let freq1 = {}
    let freq2 = {}
    for (let letter of aa) {
        freq1[letter] = freq1[letter] +1 || 1
    }
    for (let letter of bb) {
        freq2[letter] = freq2[letter] +1 || 1
    }
    for (let key in freq1) {
        if (!(key in freq2)) {
            return false
        }
        if (freq1[key] != freq2[key])
        return false
    }
    console.log(freq1, freq2)
    return true
    
  }

  // accepts a variable number of arguments
  // check for dublicates amongst the arguments
  function areThereDuplicates() {
      let arr = []
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
  }
  let valuesSoFar = {}
  for (let i = 0; i < arr.length; ++i) {
      let value = arr[i]
      if (value in valuesSoFar) {
          return true
      }
      valuesSoFar[value] = true
  }
  return false
}

// instructor's solution with multiple pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  // given an array of sorted #'s and a target, 
  // determine if there is a pair of numbers who's average = the target
  function averagePair(arr, target){
    let left = 0
    let right = arr.length - 1
    let avg = 0
    while (left<right) {
        avg = arr[left]+arr[right]/2
        if (avg===target) {
            return true
        } else if (avg > target) {
            right--
        } else {
            left++
        }
    }
    return false
  }