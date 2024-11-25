/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let enterprise = "Agro Fresam"
let department = "I+D"

let info = enterprise + " ("+ department + ")"

console.log(info)

// 2. Muestra la longitud de una cadena de texto

console.log(enterprise.length)
console.log(department.length)


// 3. Muestra el primer y último carácter de un string

console.log(enterprise[0], enterprise[10])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(enterprise.toUpperCase())
console.log(enterprise.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let nachricht = `This
is
a
message 
in 
many
lines :)
`
console.log(nachricht)

// 6. Interpola el valor de una variable en un string

let name = "Daniel" 
let email = "innovacionydesarrollo@agrofresam.com.mx"
console.log(`Hello ${name}, email: ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(enterprise.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(enterprise.includes("Agro"))

// 9. Comprueba si dos strings son iguales

console.log(enterprise === department)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(enterprise.length == department.lenght)