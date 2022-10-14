
//--------- Initiate a 10 value array object and fill it with false
let data = new Array(10)
//console.log(data)

for (let i = 0; i < data.length; i++){
    data[i] = false;
}

console.log(data);

//--------- with fill method we can do it easily
let data2 = Array(10)
data2.fill(100);
console.log(data2)

//--------- Fill the specific element if we want 
let response = Array(20)
response.fill(false)

for(let i = 0; i <response.length; i++){
    let rand = Math.floor(Math.random() * 10 + 1)
    response[i] = rand < 10 ? "Head" : "Tail"
}

console.log(response);