const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Parseo Lectura
        this.app.use(bodyParser.urlencoded({extended: false}));
        
        // Directorio publico
        this.app.use(express.static('public'));

    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
       this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;