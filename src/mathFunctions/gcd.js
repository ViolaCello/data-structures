// Greatest Common Divisor

const gcd = (a,b) => {
    let larger = Math.max(a,b)
    let smaller = Math.min(a,b)
    let temp;
    while (smaller > 0) {
        temp = (larger%smaller)
        larger = smaller
        smaller = temp
        console.log(larger, smaller, temp)
    }
    console.log("end", larger, smaller, temp)
}