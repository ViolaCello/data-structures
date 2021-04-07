// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

const defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]')
}

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.

const singleNonDuplicate = function(nums) {
    let size = nums.length
    let found = false
    while (!found) {
        if (nums[0]===nums[1]) {
            let removed = nums.shift()
            let removeAgain = nums.shift()
        } else {
            found = true
        }
      
    }
    return nums[0]
}

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = function(nums) {
    let result = []
    let count = 0
    for (let i = 0; i<nums.length; i++) {
        count = 0
        for (let j = 0; j<nums.length; j++) {
            if (i != j && nums[i]>nums[j]) {
                count++
            }
            
        }
        result.push(count)
    }
    return result
}

// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

const countSmaller = function(nums) {
    let result = []
    let count = 0
    for (let i = 0; i<nums.length - 1; i++) {
        count = 0
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i]>nums[j]) {
                count++
            }
        }
        result.push(count)
    }
    result.push(0)
    return result
}