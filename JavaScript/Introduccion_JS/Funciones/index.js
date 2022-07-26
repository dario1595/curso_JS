//Funciones

/*function iterar(arg1) // 1 forma para declarar una funcion
{
    for (let i = 0; i < arg1.length; i++)
    {
        console.log(arg1[i]);
    }
}

const numeros = [1,2,3,4,5]; // Arreglo
iterar(numeros);

const numeros1 = [1,23,'hola',4,5]; // Arreglo
iterar(numeros1);

function suma (a,b)
{
    return a + b;
}

const resultadoSuma1 = suma(1,2);
const resultadoSuma2 = suma(6,7);
const resultadoSuma3 = suma(resultadoSuma1,resultadoSuma2);
console.log("Resultado: ",resultadoSuma3);

//callback se escribe al final de la funcion (cb)

function suma (a,b,cb)
{
   const resul = a + b 
   cb(resul)
}

function Callback(result)
{
    console.log("Resultado: ",result);
}
suma (2,3,Callback);*/

// fat arrow functions, no hace falta colocarle function y si posee una sola linea no necesita del return

const miFatArrowFunction = (a,b) => a + b;
const r = miFatArrowFunction(1,2);
console.log("Resultado: ",r);

const otraFAF = (a,b) => 
{
    return a + b
}

const r1 = otraFAF(1,24);
console.log("Resultado: ",r1);