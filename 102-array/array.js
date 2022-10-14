// 2 dimentional array

function zeromatrix(m, n){
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

let newmatrix = zeromatrix(3, 2);
console.log(newmatrix);