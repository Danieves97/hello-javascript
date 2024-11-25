/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Daniel"

if (name == "Daniel"){
    console.log(`Name: ${name}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "daniel"
let password = "danidev97"

if (user == "daniel" && password == "danidev97"){
    console.log("Correct!")
} else{
    console.log("Incorrect :(")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let n = 2

if (n == 0){
    console.log("The number is zero.")
}else if (n > 0){
    console.log("The number is positive.")
}else{
    console.log("The number is negative")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17

if (age < 18 && age >= 0){
    let difference = 18 - age
    console.log("You cannot vote yet, but you'll be able in", difference, "years.")
} else if (age >= 18){
    console.log("You can vote :D")
} else{
    console.log("Invalid age! >:(")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let flag
if (age >= 18){
    flag = true
} else if(age < 18){
    flag = false
}
let message = flag ? "Adult" : "Minor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 1

if (month == 1){
    console.log("We're in Spring")
} else if(month == 2){
    console.log("We're in Summer")
} else if(month == 3){
    console.log("We're in Fall")
} else if(month == 4){
    console.log("We're in winter")
} else{
    console.log("Invalid input!")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month == 1){
    console.log(31)
} else if(month == 2){
    console.log(29)
} else if(month == 3){
    console.log(31)
} else if(month == 4){
    console.log(30)
} else if(month == 5){
    console.log(31)
} else if(month == 6){
    console.log(30)
} else if(month == 7){
    console.log(31)
} else if(month == 8){
    console.log(31)
} else if(month == 9){
    console.log(30)
} else if(month == 10){
    console.log(31)
} else if(month == 11){
    console.log(30)
} else if(month == 12){
    console.log(31)
} else{
    console.log("Invalid input!")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "italiano"

switch (language){
    case "español":
        console.log("Hola")
        break
    case "english":
        console.log("Hello")
        break
    case "deutsch":
        console.log("Hallo")
        break
    case "francais":
        console.log("Bonjour")
        break
    case "italiano":
        console.log("Buongiorno")
        break
    default:
        console.log("Language not detected.")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (month){
    case 1:
        console.log("Spring")
        break
    case 2:
        console.log("Summer")
        break
    case 3:
        console.log("Fall")
        break
    case 4:
        console.log("Winter")
        break
    default:
        console.log("Invalid input!")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month){
    case 1:
        console.log(31)
        break
    case 2:
        console.log(29)
        break
    case 3:
        console.log(31)
        break
    case 4:
        console.log(30)
        break
    case 5:
        console.log(31)
        break
    case 6:
        console.log(30)
        break
    case 7:
        console.log(31)
        break
    case 8:
        console.log(31)
        break
    case 9:
        console.log(30)
        break
    case 10:
        console.log(31)
        break
    case 11:
        console.log(30)
        break
    case 12:
        console.log(31)
        break
}