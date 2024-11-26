/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

let i = 1

for(i; i < 21; i++){
    console.log(i)
}

//while(i < 21){
//    console.log(i)
//    i++
//}

//do{
//    console.log(i)
//    i++
//} while(i < 21)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0
for(let n = 1; n < 101; n++){
    sum += n
}
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let v = 0; v < 51; v++){
    if(v % 2 != 0){
        continue
    }
    console.log(v)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nameArray = ["juan", "daniel", "paulo", "mateo", "glenda", "maría"]

for(let Name of nameArray){
    console.log(Name)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "paralelepipedo"
let num = 0

for(let vowel of myString){
    switch(vowel){
        case "a":
            num++
            break
        case "e":
            num++
            break
        case "i":
            num++
            break
        case "o":
            num++
            break
        case "u":
            num++
            break
        default:
            continue
    }
}
console.log(num)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myNumbers = [2, 5, 2, 3, 8, 1, 3]
let mult = 1

for(let val of myNumbers){
    mult *= val
}

console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multfive = 5
for(let unit = 1; unit < 11; unit++){
    multfive *= unit
    console.log(`5 * ${unit} = ${multfive}`)
    multfive = 5
}

// 8. Usa un bucle para invertir una cadena de texto

let myString2 = "hola"
let myArray2 = []

for(let index of myString2){
    myArray2.push(index)
}

let reverseArray = myArray2.reverse()

for(let i of reverseArray){
    console.log(i)
}
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10