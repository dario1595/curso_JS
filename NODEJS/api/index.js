const mongoose = require('mongoose'); // Esta variable es para conectar con la libreria
mongoose.connect('mongodb+srv://Lsparda:Xncrw1zf@cluster0.86kzi.mongodb.net/miapp?retryWrites=true&w=majority');

const User = mongoose.model('User',
{
    username: String,
    edad: Number,
}
);// se le pasa el nombre y el formato del objeto, que debe ser en json

const crear = async() => 
{
    const user = new User({username:'Chanchito triste', edad: 25});
    const savedUser = await user.save();// Retorna una promesa
    console.log (savedUser);
};

//crear();

const buscarTodo = async () => 
{
   const users = await User.find();//Find busca todo lo que esta dentro de la coleccion 
   console.log(users); 
};

//buscarTodo();

const buscar = async () => 
{
   const user = await User.find(
    {
        username:'Chanchito'
    });
   console.log(user); 
};

//buscar();

const buscarUno = async () => 
{
   const user = await User.findOne( // find.One busca 1 solo objeto
    {
        username:'Chanchito'
    });
   console.log(user); 
};
//buscarUno();

const actualizar = async () => 
{
   const user = await User.findOne( // find.One busca 1 solo objeto
    {
        username:'Chanchito'  
    });
    console.log(user); 
    user.edad = 30;
    await user.save();
    console.log(user); 
};
//actualizar();

const eliminar = async () => 
{
   const user = await User.findOne( 
    { 
        username:'Chanchito triste'
    });
    console.log(user);
    if (user) 
    {
        await user.remove();// Se llama siempre y cuando el recurso exista
    }   
};

eliminar();