function palindrome(str) {
   let reversed = ""
    for (let string of str) {
        reversed = string + reversed
    }
    if (str==reversed) return true
    return false 
}