const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();



const app = express();


app.get('/', (req, res) => {
    
    const ruta = path.join(__dirname, './views/home.html');
    res.sendFile(ruta);
}); 

const publicFolder= path.resolve(__dirname, './public');
app.use(express.static(publicFolder));

app.get('/registro', (req, res) => {
    
    const rutaRegistro = path.join(__dirname, './views/registro.html');
    res.sendFile(rutaRegistro);
}); 

app.get('/login', (req, res) => {
    
    const rutaLogin = path.join(__dirname, './views/login.html');
    res.sendFile(rutaLogin);
}); 

app.listen(process.env.PORT, () => {
    console.log('el servidor este escuchando en el puerto' + process.env.PORT + '- http://localhost:3001');

});

