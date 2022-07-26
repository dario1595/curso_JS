//IF
const edad = 6
if (edad > 5 && edad <18)
{
    console.log('El niño puede jugar');
}
else
{
    console.log('El niño no puede jugar');
}

console.log('fin del Programa');
// While

let x = 0
while(x<5)
{
    console.log(x);
    x++
}

console.log("Terminando el loop");

//Switch

switch(1) 
{
    case 1:
        {
            console.log("Soy el caso 1");
            break; 
        }
    case 2:
        {
            console.log("Soy el caso 1");
            break;  
        }
    default: 
        {
            console.log("Chanchito triste"); 
            break; 
        }
}

// For

for (let i = 0; i < 10; i++)
{
    console.log(i);
}
console.log("Terminando el For");

const numeros = [1,2,3,4,5]; // Arreglo

for (let i = 0; i < numeros.length; i++)
{
    console.log(numeros[i]);
}