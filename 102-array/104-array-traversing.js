
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let doubleNumber = number.map(n => n * 2); // output [0,  2,  4,  6,  8, 10, 12, 14, 16, 18]

let evenNumber = number.filter(n => n % 2 === 0); // output [0, 2, 4, 6, 8]

let oddNumber = number.filter(n => n % 2); // output [ 1, 3, 5, 7, 9 ]

let sum = number.reduce((next, prev) => prev + next, 0) // Output: 45

let greaterThan = number.find((n) => n > 4); // Output: 5


// Q: Compute total grade sum for students with grades 10 or above by composing map, filter and reduce

const students = [
    { name: "Mahmudul", grade: 10 },
    { name: "Hasan", grade: 15 },
    { name: "Kazi", grade: 19 },
    { name: "Sakib", grade: 9 }
]

const aboveTenSum = students
        .map(students => students.grade)
        .filter(grade => grade >= 10)
        .reduce((prev, Next) => prev + Next, 0);

console.log(aboveTenSum);
// Output: 44

//Two Dimensional Array Traverse
let twoDimensional = [[10, 20, 30], [10, 30, 40], [40, 90, 100]]

for (let i = 0; i < twoDimensional.length; i++){
    for (let j = 0; j < twoDimensional[i].length; j++){
        console.log(`[${i}, ${j}] = ${twoDimensional[i][j]}`)
    }
}

/*output:
    [0, 0] = 10
    [0, 1] = 20
    [0, 2] = 30
    [1, 0] = 10
    [1, 1] = 30
    [1, 2] = 40
    [2, 0] = 40
    [2, 1] = 90
    [2, 2] = 100
*/