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