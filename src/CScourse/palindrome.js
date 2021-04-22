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