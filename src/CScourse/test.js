function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // solution('4 5 6 - 7 +')
    const operations = S.split(' ')
    let stack = []
    for (let i = 0; i<operations.length; i++) {
        console.log(stack)
        if (stack.length==0 && (operations[i]==isNaN)) return -1
        if (stack.length>0 &&  stack[stack.length-1]<0) return -1
       if (!isNaN(operations[i])) {
           stack.push(parseInt((operations[i])))
       } else if (stack.length != 0) {
             if (operations[i]=="POP") {
               stack.pop()
       }
           else if (operations[i]=="DUP") {
               stack.push(stack[stack.length-1])
           }
           else if (operations[i]==="+" && stack.length>1) {
               let last = parseInt(stack.pop())
               let nextLast = parseInt(stack.pop())
               let add = last + nextLast
               stack.push(add)
           } else if (operations[i]==="+" && stack.length<2) {
               return -1
           } else if (operations[i]==="-" && stack.length>1) {
                let last = parseInt(stack.pop())
               let nextLast = parseInt(stack.pop())
               let subtr = last - nextLast
               stack.push(subtr)
           } else if (operations[i]==="-" && stack.length<2) {
               return -1
           }
       } 

    }
    console.log("here")
    if (stack.length==0) { 
        return -1
    } else {
        return stack.pop()
    }
}

