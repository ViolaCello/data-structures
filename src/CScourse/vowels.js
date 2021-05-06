// return the number of vowels in the string

function vowels(str) {
    let vowl = ["a","e","i","o","u"]
    let count = 0
    for (letter of str) {
        if (vowl.includes(letter.toLowerCase())) count++
    }
    return count
}