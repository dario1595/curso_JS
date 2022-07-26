const express = require ('express'); 
const mongoose = require('mongoose');
// La primera parte es la asignacion del framework
// La segunda (requiere) no sirve para importar dependencias de 3
// La tercera el nombre de la denpendencia
const user = require('./user.controller');

const app = express();
const port = 3000;

app.use(express.json()); // Esto toma el cuerpo de la peticion y de json la pasa a js
mongoose.connect('mongodb+srv://Lsparda:Xncrw1zf@cluster0.86kzi.mongodb.net/miapp?retryWrites=true&w=majority');


app.get('/users',user.list); 
app.post('/users',user.create); 

app.get('/users/:id',user.get); 
app.put('/users/:id',user.update); 
app.patch('/users/:id',user.update); 
app.delete('/users/:id',user.destroy); 

app.use(express.static('app'));// Busca en una carpeta donde se encuentran los archivos
app.get('/',(req,res) => 
{
    console.log(__dirname);
    res.sendFile( __dirname + '/index.html'); // envia un archivo html al usuario, se indica donde se encuentra
});

/*app.get('/',(req,res) => 
{
    res.status(200).send('Chanchito feliz');
});
//Status le indica al cliente si la respiesta tuvo exito
// send sirve para mandarle un dato

app.post('/',(req,res) => 
{
    res.status(201).send('Creando chanchito');
});
// El post no se puede acceder desde el navegador, se requiere postmano u otra app
// 200 cuando devolvemos ok y datos
// 201 ok - creado
// 204 ok - no devuelve nada


app.get('/:id',(req,res) => 
{
    console.log(req.params);
    res.status(200).send(req.params);
});

app.put('/:id',(req,res) => 
{
    console.log(req.params);
    res.sendStatus(204);
    //Sendstatus solo devuelve el estado
});
//id: es un dato variable que aparece en la ruta


app.patch('/:id',(req,res) => 
{
    res.sendStatus(204);
});

app.delete('/:id',(req,res) => 
{
    res.sendStatus(204);
});
*/
app.get('*',(req,res) => // Con esto manejo todas las rutas que no se encuentren definidas
{
    res.status(404).send('Esta pagina no existe');
});

app.listen(port, () =>  // listen sirve para escuchar la peticion
{
    console.log('Arrancando la Aplicacion');
});

//Endppint ruta a la que se puede llegar 
