
//Multidimensional Array
let multidimensional = [[20, 10, 5, 2], ["String", "Bengali", "English"], ["🔥", "🌎", "🌊"]] 
console.log(multidimensional[1][2])
//output: English

// 2 dimensional array
function zeroMatrix(m, n){
    let newArray = [];

    for (let i = 0; i < m; i++){
        let row = [];

        for(j = 0; j < n; j++){
            //row.push(10);
            row.push(3);
        }

        newArray.push(row);
    }

    return newArray;
}

let newMatrix = zeroMatrix(3, 2);
console.log(newMatrix);