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
function selectionSort(arr) {
    let min = []
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