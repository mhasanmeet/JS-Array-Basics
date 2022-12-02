//We store many things in the array 
let simpleArray = ["sting", 10, true, null, undefined, "🔥", {name: "Mahmudul Hasan", age: 24}]

/* 
We can also store function, 
in JavaScript function is First Class function. That's why we can store function in Array
*/

//first declare function 
let simpleFunc = () =>{
    console.log(" I am a function")
}

let funcArray = [simpleFunc()]

//We can store function in array with others
let array = ["sting", 10, true, null, undefined, "🔥", {name: "Mahmudul Hasan", age: 24}, simpleFunc()]

//initiate Array
let newArray = new Array(20, 10)
console.log(newArray)
//output: [ 20, 10 ]

let aArray = Array(5, 7)
console.log(aArray)
//output: [ 5, 7 ]

let stringArray = new Array('My', 'Country', 'is', 'Bangladesh')
console.log(stringArray)
//output: [ 'My', 'Country', 'is', 'Bangladesh' ]

/*
These way we can create Array but in practical way we're not using these way. 
The way we declare array is-
*/
let modernArray = ["Bangladesh", 20, false]
console.log(modernArray)
//output: [ 'Bangladesh', 20, false ]
