function palindrome(str) {
   let reversed = ""
    for (let string of str) {
        reversed = string + reversed
    }
    if (str==reversed) return true
    return false 
}

// alternate

function checkIfPalindrome(str) {
    let reversed = str.split('').reverse().join('')
    return str === reversed 
}

// another alternate using multiple pointers
function checkPalindrome(str) {
    let i = 0
    let j = str.length -1
    while (i<j) {
        if (str[i]!=str[j]) return false
        i++
        j--
    }
    return true
}