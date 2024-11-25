/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
console.log("Operaciones aritméticas")
let sum = (2 + 4)
let rest = (10 - 2)
let mult = (2 * 4)
let div = (21 / 7)
let exp = (3 ** 3)
let mod = (50 % 2)

console.log(sum)
console.log(rest)
console.log(mult)
console.log(div)
console.log(exp)
console.log(mod)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log("Variables de asignación")
sum += 1
rest -= 1
mult *= 2
div /= 2
exp **= 2
mod %= 1
console.log(sum)
console.log(rest)
console.log(mult)
console.log(div)
console.log(exp)
console.log(mod)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("Operadores de Comparación (True)")
console.log(1 < 3)
console.log(30 > 29)
console.log(1 >= 1)
console.log(10 != 9)
console.log(8 == 16 / 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("Operadores de Comparación (False)")
console.log(1 > 3)
console.log(30 < 29)
console.log(1 <= 0)
console.log(9 != 9)
console.log(8 == 2)

// 5. Utiliza el operador lógico and

console.log ("Operador And")

let ilikearts = false
let ilikeprog = true

console.log(ilikearts && ilikeprog)

// 6. Utiliza el operador lógico or

console.log("Operador Or")
console.log(ilikearts || ilikeprog)

// 7. Combina ambos operadores lógicos
let morning = true
let sunday = false

console.log(ilikearts && ilikeprog || morning || sunday)


// 8. Añade alguna negación

console.log(!(ilikearts && ilikeprog || morning || sunday))

// 9. Utiliza el operador ternario

morning ? console.log("Let's program") : console.log("let's go to work")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(15 - 2 >= 9 + 4 && 24 / 2 != 3 ** 4)