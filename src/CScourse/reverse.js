// reverse a string

function reverse(string) {
    let result = ""
    const j = string.length
    for (let i = 0; i<j; i++) {
        result = result+string.slice(-1)
        string = string.slice(0,-1)
    }
    return result    
}

// another, better ES6 solution:
function reverse(string) {
    let result = ""
    for (let str of string) {
        result = str+result // goes through each character of the string and adds it to the BEGINNING of result
    }
    return result
}
