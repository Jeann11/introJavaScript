//Variables
//Reserva de memoria, donde guardo informacion. La informacion puede cambiar (en tiempo de ejecucion)

//var
var name = "Adrian"

let number = 1

//lets
let pet = "Dog"

//const
const lastName = "Cordoba";

//-----------------------------------------------------------------------------------------------//

var name = "Diego";

//Incremento y decremento
number++;
number--;


//concatenacion
//console.info("el nombre del facilitador " +  name + " " + "y tengo un " + pet)
 
//interpolacion
//console.info(`mi nombre es ${name} y tengo un ${pet}`)

//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.

//-----------------------------------------------------------------------------------------------//

//Funciones>
//Una función es un bloque de instrucciones que puede ejecutarse tantas veces como desee.
//Una función puede tener parámetros y devolver un valor. Las funciones se pueden definir de diferentes 
//maneras. Quizás la más común es la declaración de función. Comienza con la palabra clave function. Sigue:
//El nombre de la función,los parámetros encerrados entre paréntesis, las afirmaciones encerradas entre corchetes.













//declara una funcion
function medirSuperficieCuadrado(longitudLado) {
    return longitudLado * longitudLado;
  }






















//Variables 
let numeroA = 3 
let numeroB = 6
let numeroZ = 7

//Declarar funciones
function sumar(Numero1, raul, diego){
  return Numero1 + Numero2 + diego
}

function restar(a , b){
  return a - b
}

function multiplicar(a , b){
  return a * b
}


//llamar a las funciones
//console.info(sumar(3567, numeroA, numeroZ)) //10
//console.info(sumar(6, 15, numeroB)) //21 //hardcode - no lo hagan













var longitudLado = 6


//llamar a una funcion
//var resultado = medirSuperficieCuadrado(longitudLado)

//console.info(resultado)











//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//1
//Defina una función helloque devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.

//2
//Defina dos funciones.
//La primera función adebería devolver 'Hello a!'y la segunda función bdebería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.

//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greety asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.


//Parámetros

function give(numeroA) {
  return numeroA + 5;
}
const resultado = give(6)

console.info("este es esl resultado de give" + give(5))
console.info(resultado)

//definimos una función que simplemente devuelve el parámetro input. Los parámetros son variables. 

let result = give('apple');

//llamamos a la función y le pasamos el argumento 'apple'. La función será ejecutada. 

//El argumento 'apple'se asignará al parámetro input. Input obtiene el valor 'apple'. 
//La variable input se devuelve en la única línea de código de la función. 
//Este retorno se asigna a la variable result. Finalmente, result tiene el valor 'apple'.

//Ejercicio
//Escribir una función echo que también devuelva el parámetro pasado. 
//echo('Greta') debe volver 'Greta'y echo('CO2') debe volver'CO2'


//CONDICIONALES ------- que son???
//ARRAYS ------que son??? que funciones existen para maniular Arrays?








//medirSuperficieCuadrado()