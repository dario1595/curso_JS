const todos = JSON.parse(localStorage.getItem('todos')) || []; // Con esto busca lo almacenado, en caso de no encontrar usara un arreglo vacio
//json parce: transforma los datos string en elementos de js

const render = () =>
{
    const todoList = document.getElementById('todo-list');//Buscamos el indice afuera del ciclo
    /* todoList.innerHTML = '';// Eliminar por completo el iner html
     for (let i = 0; i < todos.length; i++)
     {
        todoList.innerHTML += '<li>' + todos[i] + '</li>'; // Concatenamos para ir cargando el array y mostrar mediante la etiqueta li
     }*/
     const todosTemplate = todos.map(t =>'<li>' + t + '</li>'); // funcion para leer los elementos dependiendo de la cantidad de elementos que tenga la funcion
      console.log (todosTemplate);
      //join: toma los elemento de los arreglos y juntarlos
      todoList.innerHTML = todosTemplate.join('');

      // splice es un metodo que sirve para eliminar elementos de un arreglo, indicando desde donde hasta donde.

      //querySelectorAll: nos permite buscar  por id, clases, etiquetas, etc 
      const elementos = document.querySelectorAll('#todo-list li'); // elementos es un listado de nodos que contiene li    
      elementos.forEach((elemento, i)=>
      {    
          elemento.addEventListener('click',() => // Se agrega un evento al elemento
          {
              // parentNode: me lleva a la etiqueta ul. Ya que los nodos padres pueden eliminar a los hijos
              //removeChild: realiza la eliminacion delelemento
              elemento.parentNode.removeChild(elemento);
              todos.splice(i,1);
              actualizarTodos(todos)
              render();// llamamos la funcion para actualizar al momento deliminar
          })
      });  
}

const actualizarTodos = (todos) => 
{
    const todoString = JSON.stringify(todos);// Con esto transformo el elemento en un string para guardarlo en el navegador
    localStorage.setItem('todos',todoString);// aca reemplazamos los todos en string
}
window.onload = () => 
{
    render();
    const form = document.getElementById('todo-form');// Tomamos la referencia del formulario
    //Agregamos una funcion que busca lo del todo, tomar el texto, guardarlo en una variabla para guardar en un arreglo y posteriormente limpiarlo
    form.onsubmit = (e) => 
    {
       e.preventDefault();// Evita que la app no se refresque(comportamiento por defecto de los formularios) 
       const todo = document.getElementById('todo'); // Referencia a todo
       const todoText = todo.value; // Tomamos el contenido del todo(texto)
       todo.value = '';
       todos.push(todoText);// Sirve para ir agregando a un arreglo elementos
       actualizarTodos(todos);
       render();
       //locastorage: permite guarda elementos dentro del explorador web para poder reutilazrlos
    
    }
}