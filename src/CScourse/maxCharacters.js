// Given a string, return the character that is most commonly used in that string

function maxChars(str) {
    let chars = {}
    for (let char of str) {
        chars[char] = chars[char]+1 || 1
        //console.log(chars)
    }
    let result;
    for (let key in chars) {
        console.log(result)
        if (!result) {
            console.log("I'm in here!", key, chars[key])
       let result = [key, chars[key]]
    } else if 
        (chars[key]>result[1]) { result = [key, chars[key]]
    }
}
    return result
}