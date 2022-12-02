let data = [1, 2, 3, 4, 5, 6];

// Reduce function
function sumFunc(accumulator, currentValue){
    return accumulator + currentValue
}

//Reduce method
let sum = data.reduce(sumFunc);
console.log(sum);

//find out average 
let data2 = [1, 2, 3, 4, 5, 6];
let avg = data2.reduce((acc, cur, index, arr) => {
    acc += cur;
    if(index === arr.length -1){
        return acc / arr.length
    }
    return acc;
})
console.log(avg);

