
// For Each Array Traverse
// function(value = Array value, index = Array Index, arr = Total Array)

// Let find index number by using forEach Traverse
let data = [10, 26, 29, 15];

data.forEach(function (value, index){
    console.log(value, index)
})

// do sum
let data2 = [10, 26, 29, 15, 204];

let sum = 0;
data2.forEach(function (value){
    sum += value
})

console.log(sum)

// 
let data3 = [90, 49, 33, 78];

function forEach(data3){
    for (var i = 0; i < data3.length; i++){
        console.log(data3[i])
    }
}

forEach(data3);