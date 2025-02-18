// Reto Día 2 7DaysofCode - Lógica JS
/* 1. Reformulación del Porgrama: "Realizar una encuesta donde preguntes nombre, edad y que lenguaje practicas
y al final mostrar un mensaje + pregunta opcional" */

let userName = prompt("¿Cuál es tu nombre?")
let userAge = Number(prompt("¿Cuántos años tienes?"))
let userLanguage = prompt("¿Qué lenguaje de programación estás estudiando?")

alert (`¡Hola! ${userName}, tienes ${userAge} y ya estás aprendiendo ${userLanguage}`)

let userAnswer = Number(prompt (`¿Te gusta estudiar ${userLanguage}? Responde con el número 1 para SÍ o 2 para NO`))

if (userAnswer == 1) {
    alert ("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
    
} if (userAnswer == 2) {
    alert ("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}
