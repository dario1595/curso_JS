console.log('Hola Mundo')

//Tipos de datos
//String: Cadena de caracteres. ' '
//Boolean: true false
//Null: nulo. Esta es una variable definida, pero su valor es nulo
//Number: 123213
//Underfined: es una variable que no se encuentra definida 
//Object: un objeto. Son estructura que permite agrupar los datos anteriores

// Definicion de variables
// var - Esta va al inicio del archivo para definir la variable. Se recomiendoa no usar
// let - Indicamos que el texto contenido se encuentra en una variable de js
// const - Constante

//var miPrimeraVariable = 'lala';

let miPrimeraVariable = 'Mi primera variable'
//console.log(miPrimeraVariable);

miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = 258

//console.log(miNumero,miNumero2,miNumero3,miBoolean,miOtroBool)

let undef
//console.log(undef);

let nulo = null
//console.log(nulo);

//console.log('nulo',nulo,12);

//Objeto
//Es una agrupacion de datos, estos datos hacen sentidos entre si
//Objeto vacio
const miPrimerObjeto = {}

//Objeto - Estos tienen propiedades
const miObjeto = {
    unNumero:12,
    unString:'Esta cadena de caracteres',
    unaCondicion: true,
}

//console.log(miObjeto);
//console.log(miObjeto.unString);

//Arreglos, pueden tener datos de cualquie tipo dentro de el
const arr = [1,2,'Hola','Mundo',miObjeto]

//console.log(arr);
arr.push(5)//Push sirve para agregar elementos
console.log(arr);