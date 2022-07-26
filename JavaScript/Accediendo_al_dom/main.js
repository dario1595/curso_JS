//Esta funcion permite que al estar la etiqueta antes del parrafo a modificar, espere a que carge todo el archivo asi de esta manera no da error.
window.onload  = () => 
{
    const parrafo = document.getElementById('text')// Esta funcion sirve para obtener un elemento del archivo html mediante su id
    //console.log(parrafo.innerHTML) //innerHTML sirve para acceder al texto
    //parrafo.innerHTML = "Texto actualizado" // Cambia el contenido del parrafo
    //Agregamos mas elementos a la etiqueta de parrafo
    parrafo.innerHTML = '<li> Elemento 1 </li><li> Elemento 2 </li>'
}