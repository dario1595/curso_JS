 Promise.resolve(2) //Constante global promise, indico que este valor lo voy a tener resuelto. Me devuelve la id de promesa
 .then(valor => console.log(valor)); //obtiene el valor de la promesa cuando se resuelve en un futuro

 //Se pueden encadenar promesas
 Promise.resolve(2) 
 .then(valor => valor + 1)
 .then(console.log(valor))
 .then(valor => Promise.reject(valor)) // Rechaza la cadena de valor
 .catch(e => console.error(e))//A difrencia de then, este recibe un msj; 
 ;
 new Promise((resolve, reject) => 
 {
    setTimeout(() =>resolve(2), 1000 ) // con esto se resuelva la promesa despuesd de 1 seg
 })
 .then (x => console.log (x))
 .catch(e => console.error(e));