//for loop
let array = [10, 20, 30];

for(let i = 0; i<= array.length; i++){
    console.log(array[i]);
}
// Output: 10 20 30

//2. map() method
let array2 = ['Mahmudul', 'Hasan', 'Shiblu']
let newData =  array2.map((index) => console.log(index));
// Output: Mahmudul Hasan Shiblu

//3. do...while
let array3 = ['Mahmudul', 'Hasan', 'Shiblu']

let i = 0;
do{
    console.log(array3[i]);
    i++;
}
while (i < array3.length);
//Output: Mahmudul Hasan Shiblu

//4.for... of
let array4 = ['Mahmudul', 'Hasan', 'Shiblu'];

for (let i of array4){
    console.log(i)
}
//Output: Mahmudul Hasan Shiblu

//5.for... in
let array5 = ['Mahmudul', 'Hasan', 'Shiblu'];

for ( property in array5){
    console.log(array5[property])
}
// Output: Mahmudul Hasan Shiblu

//6. while loop
let array6 = ['10', '20', '30'];
let i2 = 0;

while (i2 < array6.length){
    console.log(array6[i2])
    i2++
}

//7. for each
let array7 = ['10', '20', '30'];

array7.forEach((index) => {
    console.log(index)
})

