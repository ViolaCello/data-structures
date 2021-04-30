function capitalize(str) {
    let result = ""
    result = str[0].toUpperCase()
    let i = 0
    while(let i = 1; i<str.length; i++) {
        if (str.charCodeAt(i)==32) {
            result = result + str[i] + str[i+1].toUpperCase()
            i = i + 2
        } else {

        }
    }
    return str
}
