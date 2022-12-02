
let data = [2, 9, 10, 12];
let data2 = [10, 31];

//insert Array elements in the end by Push
data.push(10, 20)
console.log(data); 
//output: [ 2, 9, 10, 12, 10, 20 ]

//Old Style method - Push
Array.prototype.push.apply(data, data2);
console.log(data);
//output: [ 2, 9, 10, 12, 10, 20 ]

//ES6 spread operator Method
let data3 = [3, 10, 11, 13];
let data4 = [12, 33]

data3.push(...data4);
console.log(data3);
//output: [ 3, 10, 11, 13, 12, 33 ]

//insert Array elements in the begriming by unshift
let data5 = [1, 2, 3]

data5.unshift(10, 20)
console.log(data5);
//output: [ 10, 20, 1, 2, 3 ]

// slice
// Split