// creating a hash table from scratch (hashes are called Objects in JavaScript and Dictionaries in Python)
// The length of the storage location should be a prime number (for some mathematical reason, it reduces "collisions")

function hash(key, arrayLen) {
    let total = 0
    const STATIC_PRIME = 31
    // loop through each character of the 'key' or 100 times if there are more than 100 characters in the key
    for (let i = 0; i < Math.min(key.length, 100); i++) { 
        let char = key[i]
        // in ASCII the lowercase letter 'a' begins at 97
        let value = char.charCodeAt(0) - 96 
        total = ( total * STATIC_PRIME + value ) % arrayLen
    }
    return total // returns location of key
}