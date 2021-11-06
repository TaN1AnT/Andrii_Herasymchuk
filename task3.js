function digital_root(num){
    let digits = num.toString().split('').map(i => Number(i))
    let sum = digits.reduce((prevValue, currValue) => prevValue + currValue);
    return sum.toString().length === 1 ? sum : digital_root(sum)
}

console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))