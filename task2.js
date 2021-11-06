function first_non_repeating_number(str){
    let list = str.split('')
    let arr = list.filter((i) => {
        if(str.toLowerCase().split(i.toLowerCase()).length === 2){
            return i;
        }
    })
    return arr[0] ? arr[0] : "";
}

console.log(first_non_repeating_number('stress'))
console.log(first_non_repeating_number('sTreSS'))