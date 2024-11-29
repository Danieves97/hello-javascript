/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function funcSum(a, b){
    console.log(a + b)
}
funcSum(4, 7)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function major(arr){
    let major = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > major){
            major = arr[i];
        }
    }
    return major; 
}
let array = [2, 1, 7, 4, 9, 10];
const M = major(array);
console.log("The major is: ", M);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let str = "onomatopeya"

function vowels(str){
    let num = 0
    for(let v of str){
        switch(v){
            case "a":
                num++
                break
            case "e":
                num++
                break
            case"i":
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
    return num
}

let times = vowels(str)
console.log("The word has", times, "vowels.")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayStr = ["hallo", "ich", "heisse", "daniel"]

function upperCase(arrstr){
    let newArray = []
    for(let s of arrstr){
        newArray.push(s.toUpperCase())
    }
    return newArray
}

let na = upperCase(arrayStr)
console.log("New array:", na)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function prime(number){
    if(number <= 1){
        return false
    }
    
    for(let p = 2; p <= Math.sqrt(number); p++){ //10
        if(number % p === 0){
            return false
        }
    } 
    return true
}

console.log(prime(17))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let arr1 = [4, 1, 8]
let arr2 = [3, 9, 1]

function arrCommon(a1, a2){
    for(c = 0; c < a1.lenght; c++){
        if(a1[c] = a2[c]){
            
        }
    }
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado