const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth/login';

        // Connectar a la db
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    } 
    middlewares(){

        // CORS
        this.app.use(cors());

        // Parseo Lectura
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}));
        
        // Directorio publico
        this.app.use(express.static('public'))
    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/user'));
       this.app.use(this.authPath, require('../routes/auth'));
       
    }

    listen(){
       this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;