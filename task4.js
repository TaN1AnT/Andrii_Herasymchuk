function num_of_pairs(arr, target){
    let counter = 0;

    arr.forEach((i, j) => {
        for(let k = j + 1; k < arr.length; k++){
            if(i + arr[k] === target){
                counter++;
            }
        }
    });
    return counter;
}
console.log(num_of_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5)); 