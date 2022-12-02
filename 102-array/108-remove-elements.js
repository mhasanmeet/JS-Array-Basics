
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 
    Remove First Element
    data.shift()
*/
let removeFirstElement = array.shift()
console.log(removeFirstElement) //removed 1
console.log(array) //output: [2, 3, 4,  5, 6, 7, 8, 9, 10]

/*
    Remove Last Element
    data.pop()
*/
let removeLastElement = array.pop()
console.log(removeLastElement) //removed 10
console.log(array) //output: [1, 2, 3, 4,  5, 6, 7, 8, 9]

// Remove inside Element / elements from middle area in the array
splice()

//Filter array
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const toBeFilter = 6

filteredData = array2.filter((data) => data !== toBeFilter)
console.log(filteredData)
//output: [ 1, 2, 3, 4, 5, 7, 8, 9, 10 ]

//Delete Operator
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
delete array3[3]
console.log(array3)
//output: [ 1, 2, 3, <1 empty item>, 5, 6, 7, 8, 9, 10 ]



