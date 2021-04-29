// to remove spaces and punctuation and move all to lowercase:
// .replace(/[^\w]/g, "").toLowerCase();

function anagrams(stringA, stringB) {
    let newA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let newB = stringB.replace(/[^\w]/g, "").toLowerCase()
    if (newA.length != newB.length) return false
    let mapA = {}
    let mapB = {}
    for (let str of newA) {
        mapA[str] = mapA[str] + 1 || 1
    }
    for (let str of newB) {
        mapB[str] = mapB[str] + 1 || 1
    }
    if (Object.keys(mapA).length != Object.keys(mapB).length) return false
    for (let key in newA) {
        console.log(mapA[key], mapB[key])
        if (mapA[key] != mapB[key]) return false
    }
    return true
}

// alternative way using .sort()

function anagrams(stringA, stringB) { 
    return stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}