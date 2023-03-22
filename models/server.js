const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            authPath:  '/api/auth/login',
            categories: '/api/categories',
            usuariosPath:  '/api/usuarios'
        }

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
        this.app.use(bodyParser.urlencoded({extended: true}));
        
        // Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.paths.usuariosPath, require('../routes/user'));
       this.app.use(this.paths.categories, require('../routes/categories'));
       this.app.use(this.paths.authPath, require('../routes/auth'));
       
    }

    listen(){
       this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;