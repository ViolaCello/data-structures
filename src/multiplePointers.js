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

  // multiple pointers. Checks if the lettering in first string can form word in 2nd string without changing the order
  function isSubsequence(word, phrase) {
    let check =""
    let wordLeft = 0

    for (let i = 0; i<phrase.length; i++) {
        if (word[wordLeft]==phrase[i]) {
            check = check+phrase[i]
            if (check==word) {
                return true
            }
            wordLeft++
        }
    }
    return false
  }
// Sliding Window
// find the max sum of a CONSECUTIVE subArray
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        console.log("A", currentTotal)
       currentTotal += arr[i] - arr[i-num];
        console.log("B", currentTotal)
       total = Math.max(total, currentTotal);
    }
    return total;
}

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
          else if(total >= sum){
            minLen = Math.min(minLen, end-start);
                  total -= nums[start];
                  start++;
          } 
          // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
          else {
            break;
          }
        }
       
        return minLen === Infinity ? 0 : minLen;
      }

      function findLongestSubstring(str) {
        let longest = 0;
        let seen = {};
        let start = 0;
       
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (seen[char]) {
            start = Math.max(start, seen[char]);
          }
          // index - beginning of substring + 1 (to include current in count)
          longest = Math.max(longest, i - start + 1);
          // store the index of the next char so as to not double count
          seen[char] = i + 1;
        }
        return longest;
      }