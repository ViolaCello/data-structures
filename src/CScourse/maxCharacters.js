// Given a string, return the character that is most commonly used in that string

function maxChars(str) {
    let chars = {}
    for (let char of str) {
        chars[char] = chars[char]+1 || 1
    }
    let result;
    for (let key in chars) {
        console.log(result)
        if (!result) {
       result = [key, chars[key]]
    } else if 
        (chars[key]>result[1]) { result = [key, chars[key]]
    }
}
    return result[0]
}

// alternative

function maxCharsAlt(str) {
    let chars = {}
    let max = 0
    let maxChar;
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1
    }
    for (let key in chars) {
        if (chars[key] > max) {
            max = chars[key]
            maxChar = key
        }
    }
    return maxChar
}
