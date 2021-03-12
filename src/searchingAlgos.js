// linear search

// replicate JavaScript .indexOf.  If value not found, return -1


function linearSearch(arr, item) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===item) {
            return i
        }
    } 
    return -1
}

// binary search

function binarySearch(arr, value){
    let left = 0
    let right = arr.length-1
    let mid = Math.floor((left+right)/2)
    if (arr[mid]==value) return mid
    while(arr[mid] !== value && left <= right) {
       // console.log(left, right, mid, result)
       if (left===right-1) {
           if (arr[left]==value) { 
               return left 
           } else if (arr[right]==value) {
               return right
           } else 
           {
               return -1
           }
       }
        mid = Math.floor((right+left)/2)
        if (arr[mid]==value) {
            return mid
        }
        if (value<arr[mid]) {
            right = mid
        } else 
        left = mid
    }
    return -1
}

function naiveStringSearch(string, frag) {
    if (string===frag) return true
    let check = ""
    for (let i=0; i<string.length; i++) {
        let newI = i 
        for (let j=0; j<frag.length; j++) {
           // console.log("i", i, "newI",newI,"check",check, "j",j)
            if (string[newI]===frag[j]) {
                check = check.concat(string[newI])
                newI++
            } else { break }
            if (frag===check) return true
        }
    }
    return false
}

// even better
function naiveStringSearchFaster(string, frag) {
    let count = 0
   for(let i=0; i<string.length-frag.length+1; i++) {
       let check = string.slice(i,i+frag.length)
       console.log(check)
       if (check===frag) {
           count++
       }
   }
  return count
}