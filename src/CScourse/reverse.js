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