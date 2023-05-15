//importar el paquete que permite  hacer peticiones http
const http = require('http');

//creamos el servidor
http.createServer((req,res) => {
    //creamos el objeto
    const producto={
        referencia:888,
        nombre: 'Bombombum',
        precio: 1000
    
    }
//imprimir mensajes 
    res.write(JSON.stringify(producto))
    res.end()
})
//este es el puerto y lo podemos cambiar 
.listen(8282)
