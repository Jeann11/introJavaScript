//Variables
//Reserva de memoria, donde guardo informacion. La informacion puede cambiar (en tiempo de ejecucion)

//var
var name = "Adrian";

let number = 1;

//lets
let pet = "Dog";

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


var name = "Laura"

let affirmation = "es una joven promesa del ballet"

let language = "habla tres idiomas"

const age = 18

const birthplace = "nació en Versalles muy cerca de Paris"

const storyline = "lejos de los focos y los grandes teatros."

x = true 


// console.log(`Su nombre es ${name} y ${affirmation}, ${language}, tiene ${age} años, ${birthplace} ${storyline}. ¿Esta historia es verdadera!? ${x}`)






//Funciones>
//Una función es un bloque de instrucciones que puede ejecutarse tantas veces como desee.
//Una función puede tener parámetros y devolver un valor. Las funciones se pueden definir de diferentes
//maneras. Quizás la más común es la declaración de función. Comienza con la palabra clave function. Sigue:
//El nombre de la función,los parámetros encerrados entre paréntesis, las afirmaciones encerradas entre corchetes.

//Variables
let numeroA = 3;
let numeroB = 6;
let numeroZ = 7;

//Declarar funciones
function sumar(Numero1, Numero2) {
  return Numero1 + Numero2;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

//llamar a las funciones
//console.info(sumar(3567, numeroA, numeroZ)); //10
//console.info(sumar(6, 15, numeroB)); //21 //hardcode - no lo hagan

//Parámetros
//definimos una función que simplemente devuelve el parámetro input. Los parámetros son variables.

//llamamos a la función y le pasamos el argumento 'apple'. La función será ejecutada.

//El argumento 'apple'se asignará al parámetro input. Input obtiene el valor 'apple'.
//La variable input se devuelve en la única línea de código de la función.
//Este retorno se asigna a la variable result. Finalmente, result tiene el valor 'apple'.




//CONDICIONALES ------- que son???

let edadDeRaul = 17;
let edadDeLucia = 20;
let edadDeCarlos = 89;

function validarEdad(edad) {
  var resultado;

  switch (true) {
    case edad >= 18 && edad < 70:
      resultado = "puede conducir";
      break;
    case edad >= 70 && edad < 80:
      resultado = "dejar el coche en herencia y no conducir más";
      break;
    case edad >= 80:
      resultado = "jubilarse e irse de vacaciones permanentes";
      break;
    default:
     resultado = "no puede conducir tampoco";
     break;
  }
  
  return resultado;
}

console.info(validarEdad(edadDeCarlos));







//Bucles

//for repite la misma accion hasta que sale del bucle

//horas trabajadas

for(let horas = 0; horas <= 40; horas++){
  // console.info("llevas " + horas + " trabajadas")
}



//ARRAYS ------que son??? que funciones existen para manipular Arrays?


//Arrays [] lista o conjunto grupo de datos, los datos pueden ser de varios tipos.


//forEach atado a los Arrays

let listaDeNumeros= [5, 78, 24, 567]

listaDeNumeros.forEach(function(numero){

  if(numero < 50){
    // console.info(numero)
  }
  // console.info("numero mayor a 50 por eso no lo imprimo")
})

// console.info(listaDeNumeros[3])