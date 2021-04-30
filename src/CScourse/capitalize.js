function capitalize(str) {
    let result = ""
    result = str[0].toUpperCase()
    let i = 1
    while(i<str.length) {
        if (str.charCodeAt(i)==32) {
            result = result + str[i] + str[i+1].toUpperCase()
            i = i + 2
        } else {
            result = result + str[i]
            i++
        }
    }
    return result
}
