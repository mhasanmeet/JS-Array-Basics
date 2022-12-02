let personName = [
    {
        id: 1, name: 'Mahmudul'
    },
    {
        id: 4, name: 'Momotaj' 
    }
]

/*
    Give Id: 4
    update Name: Momotaj Begum
*/

let givenID = 4
let updateName = "Momotaj Begum"

for (let i = 0; i < personName.length; i++){
    if(givenID === personName[i].id){
        personName[i].name = updateName
    }
}

console.log(personName);