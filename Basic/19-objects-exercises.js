/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let pet = {
    name: "koko",
    age: 7,
    favFood: "tacos"
}

// 2. Accede y muestra su valor

console.log(pet.favFood)

// 3. Agrega una nueva propiedad

pet.color = "brown"
console.log(pet.color)

// 4. Elimina una de las 3 primeras propiedades

delete pet.name
console.log(pet)

// 5. Agrega una función e invócala

pet.activity = function () {
    console.log("koko is sleeping")
}

pet.activity()

// 6. Itera las propiedades del objeto

for(let i in pet){
    console.log(pet[i])
}

// 7. Crea un objeto anidado

pet.flea = {
    color: "brown",
    activity (){
        console.log("The flea jumps")
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(pet.flea.color)
pet.flea.activity()
console.log(pet)

// 9. Comprueba si los dos objetos creados son iguales

console.log(pet == pet.flea) //False

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(pet.color == pet.flea.color) //True