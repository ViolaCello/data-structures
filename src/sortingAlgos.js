// Bubble Sort - continually move largest value to the end of the array
function bubbleSort(arr) {
    let temp;
    for (let i = 0; i<arr.length; i++) {
        for (let j=0; j<arr.length - 1; j++) {
            if (arr[j]>arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                console.log(arr)
            }
        }
    }
    return arr
}

// Bubble Sort - much better Optimization
function bubbleSortOptimized(arr) {
    let temp;
    for (let i = 0; i<arr.length; i++) {
        let swapped = false
        for (let j = 0; j<(arr.length-1-i); j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
            }
        }
        if (swapped==false) break
    }
    return arr
}

// Selection Sort - continually move smallest value to the beginning of the array
function selectionSortFirstTry(arr) {
    let min = [] // this was unnecessary
    for (let i=0; i<arr.length; i++) {
        min = [arr[i+1], i+1]
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]<min[0]) {
                 min = [arr[j], j]
            }
        }   
        if (min[0]<arr[i]) {
            [arr[i], arr[min[1]]] = [arr[min[1]], arr[i]]
        }
    }
    return arr
}
// a better selection sort -- I didn't need to store the index AND value
function selectionSort(arr) {
    for (let i = 0; i<arr.length; i++) {
        let min = i
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j]<arr[min]) {
                min = j
            }
        }
        if (arr[min]<arr[i]) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

function insertionSort(arr) {
    for (let i = 0; i<arr.length; i++) {
      let currentValue = arr[i]
       for (let j = i-1; j>=0 && arr[j] > currentValue; j--) {
        arr[j+1] = arr[j]
       
       arr[j] = currentValue
       }
    }
    return arr
}

//merge two sorted arrays

function mergeSorted(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
   while (arr1.length !=0 && arr2.length !=0) {
       if (arr1[0]<=arr2[0]) {
            result.push(arr1.shift())
       } else {
           result.push(arr2.shift())
       }
   }
   return result.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    if (arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeSorted(left, right)
}

// return index of where first item would be sorted to
function pivot(arr, start = 0, end = arr.length-1) {
    let pivot = arr[start]
    let pivotIndex = 0
    for (let i = 1; i<= end; i++) {
        if (pivot>arr[i]) {
            pivotIndex++
            let temp = arr[i]
            arr[i] = arr[pivotIndex]
            arr[pivotIndex] = temp
        }
    }
    arr[0] = arr[pivotIndex]
            arr[pivotIndex] = pivot 
    return pivotIndex
}