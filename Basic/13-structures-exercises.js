/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["lion", "zebra", "bird", "elephant", "tiger"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("octopus")
animals.push("aligator")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["A Brief History of Time", "Astrophisics for People in a Hurry",
    "The Monk Who Sold his Ferrari", "Thinking, Fast and Slow", "Sapiens"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("The Great Design")
mySet.add("Sapiens")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("A Brief History of Time")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let map = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])
console.log(map)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(map.has(5))
console.log(map.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let array = ["July", "August", "September"]
map.set("Summer", array)
console.log(map)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArray = [1, 2, 3, 4, 5]
let newSet = new Set(newArray)
let newMap = new Map([["map", newSet]])
console.log(newMap)