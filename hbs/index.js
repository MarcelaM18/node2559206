const express=require('express')//importamos la libreria express 
const app = express()
const path = require('path')//para manejar las rutas
const hbs = require('hbs')//para gestionar rutas

const puerto = 8181

app.use(express.static('public'))//servidor de contenido estactico

//especificamos donde estan las rutas 
app.set('views', path.join(__dirname +'/public/views'))//config directorio de la vista
app.set('view engine', 'hbs')//indique que todo lo del hbs va ir en la carpeta views
hbs.registerPartials(__dirname +'/public/views/partials') //configuracion del directorio que guardadea los archivos partial hbs ej: encabezados,pie de pagina

//servidor de contenido estatico
app.get('/',(req,res)=>{
    res.render('home', 
    {
        titulo:'Inicio',
        nombre:'Marcela Morales'
    })
})
app.get('/productos',(req,res)=>{
    res.render('productos', 
    {
        titulo:'Productos',
        nombre:'Marcela Morales',
        rol:'Admin'
    })
})
//esto es para 
app.listen(puerto, ()=>{
    console.log(`Escuchando puerto ${puerto}`)
})
