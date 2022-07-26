const loadInitialTemplate = () =>
{
    const template = 
    `
        <h1>Usuarios</h1>
        <form id = "user-form">
          <div>
             <label>Nombre</label>
             <input name = "name" />  
          </div>
          <div>
             <label>Apellido</label>
             <input lastname = "lastname" />  
          </div>
          <button type = "submit">Enviar</button>   
        </form>
        <ul id = "user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = template;
    
}

const getUsers = async () =>
{
    const response = await fetch('/users');
    const users = await response.json();
    const template = user =>
    `
        <li>
            ${user.name} ${user.lastname} <button data-id = "${user._id}">Eliminar</button>
        </li>
    `
    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map (user => template(user)).join('');
    users.forEach(user => 
    {
       const userNode = document.querySelector(`[data-id = "${user._id}"]`);
       userNode.onclick = async e => 
       {
        await fetch (`/users/${user._id}`,
        {
          method: 'DELETE',  
        })
        userNode.parentNode.remove();
        alert('Eliminado con exito');
       }
    });

}

const addFormListener = () => 
{
    const userForm = document.getElementById('user-form');// Con esto tenemos la referencia del nodo del formulario
    userForm.onsubmit = async(e) =>
    {
        e.preventDefault();//Evitamos que la pagina se refresque al presionar enviar
        const formData = new FormData(userForm);//Sirve para obetener los datos, pero le debemos pasar una referencia
        const data = Object.fromEntries(formData.entries());// Transformar un objeto que sea un itereable, en un objeto. Formdata tiene un metodo que trasnfroma la info un iterador  
        // En sintesis las 2 lineas anteriores toman toda la info del formulario y la transforman en un objeto
        await fetch('/users',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers:
            {
                'Content-Type': 'application/json'
            }
        });// Llamado a nuestro endpoint de users
        userForm.reset(); // Al finalizar limpia el formulario
        getUsers();//Se encarga de pintar nuevamente nuestra interfaz con los usuarios
    }
    
}
window.onload = () =>
{
    loadInitialTemplate();
    addFormListener();
    getUsers();
}