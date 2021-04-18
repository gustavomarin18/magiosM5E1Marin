const express = require('express')
const app = express()
const puerto = process.env.PORT;

//donde estan los gerentes de ruteo//
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');


const path = require('path');
console.log('Prueba Gustavo')
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.use ('/',homeRouter);
//app.use ('/',userRouter);
//app.use ('/products',productRouter);







app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

