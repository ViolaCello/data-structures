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
function pyramid(n) {
    const width = (n*2) - 1
    // let midpoint = Math.floor(width/2)+1 --> turns out, I only needed the midpoint to pseudocode it
    for(let i = 1; i<=n; i++) {
        let localWidth = ((i)*2) -1 
        let spaces = width - localWidth
        let halfSpaces = spaces/2
        let row = " ".repeat(halfSpaces)
        row+="#".repeat(localWidth)
        row+=" ".repeat(halfSpaces)
        console.log(row)
    }
}

// pyramid alternate iterative solution:
function pyramidIterive(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row ++) {
        let level = ''
        for (let column = 0; column < 2 * n -1; column++) {
            if (midpoint - row <= column && midpoint + row >= column ) {
                level+="#"
            } else {
                level+=" "
            }
        }
        console.log(level)
    } 
}