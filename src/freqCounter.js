function validAnagram(str1, str2){
    if (str1.length != str2.length) {
        return false
    }
    let freq1 = {}
    let freq2 = {}
    for (letter of str1) {
        freq1[letter] = freq1[letter] +1 || 1
    }
    for (letter of str2) {
        freq2[letter] = freq2[letter] +1 || 1
    }
    for (key in freq1) {
        if (!(key in freq2)) {
            return false
        }
        if (freq1[key] != freq2[key])
        return false
    }
    console.log(freq1, freq2)
    return true
    
  }
