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