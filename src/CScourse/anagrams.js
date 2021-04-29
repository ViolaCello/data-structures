// to remove spaces and punctuation and move all to lowercase:
// .replace(/[^\w]/g, "").toLowerCase();

function anagrams(stringA, stringB) {
    let newA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let newB = stringB.replace(/[^\w]/g, "").toLowerCase()
    if (newA.length != newB.length) return false
    let mapA = {}
    let mapB = {}
    
}