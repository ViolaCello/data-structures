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
        freq1[letter] = freq1[letter] +1 || 1
    }
  }