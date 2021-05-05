// Write a function that accepts a positive number (N).  The function should console log a step shape
// with N levels uing the # character.  Make sure the step has spaces on the right side.


function steps(n) {
    let str = ""
  for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=i; j++){
        str = str+"#"
    }
    if (str.length != n) {
        for (let k = str.length+1; k<=n; k++) {
            str = str + ' '
        }
    } console.log(str)
    str = ""
  }
}

// recursive solution
function steps(n, row = 0, stair ='') {
    if (n === row) return
    
    if (stair.length===n) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if (stair.length<=row) {
        stair+="#"
    } else {
        stair+=' '
    }
    steps(n, row, stair)
}

// pyramid
//  n*2 + 1 
function pyramid(n) {
    const width = (n*2) + 1
    let midpoint = Math.floor(width/2)+1
    for(let i = 0; i<n; i++) {
        let row = ''
        let localWidth = ((i+1)*2) + 1
        for(let j = 0; j<width; j++){
            
        }
    }
}