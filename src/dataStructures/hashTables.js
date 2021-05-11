// creating a hash table from scratch (hashes are called Objects in JavaScript and Dictionaries in Python)
// The length of the storage location should be a prime number (for some mathematical reason, it reduces "collisions")

// using "Separate Chaining" as opposed to "Linear Probing"

class HashTable {

    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    hash(key) {
        let total = 0
        const STATIC_PRIME = 31
        // loop through each character of the 'key' or 100 times if there are more than 100 characters in the key
        for (let i = 0; i < Math.min(key.length, 100); i++) { 
            let char = key[i]
        // in ASCII the lowercase letter 'a' begins at 97
            let charValue = char.charCodeAt(0) - 96 
        // location of where key should be stored in the keyMap
            total = ( total * STATIC_PRIME + charValue ) % this.keyMap.length
            }
        return  Math.abs(total)
        }

    set(key, value) {
        const storage = this.hash(key)
        if (this.keyMap[storage]===undefined) {
            this.keyMap[storage]=[]
        } 
            this.keyMap[storage].push([key, value])
    }

    get(key) {
        const storage = this.hash(key)
        if (this.keyMap[storage]===undefined) return null
        if (this.keyMap[storage].length > 1) {
            for (let i = 0; i<this.keyMap[storage].length; i++) {
                if (this.keyMap[storage][i]===key) return this.keyMap[storage][i][1]
            }
        } else {
            return this.keyMap[storage][0][1]
        }
        return null
    }

}

