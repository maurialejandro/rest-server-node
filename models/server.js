const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            authPath:  '/api/auth/login',
            categories: '/api/categories',
            usuariosPath:  '/api/usuarios',
            product: '/api/product',
            search: '/api/search',
            uploads: '/api/uploads'
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

        // File upload 
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes(){
       this.app.use(this.paths.usuariosPath, require('../routes/user'));
       this.app.use(this.paths.categories, require('../routes/categories'));
       this.app.use(this.paths.authPath, require('../routes/auth'));
       this.app.use(this.paths.product, require('../routes/product'));
       this.app.use(this.paths.search, require('../routes/search'));
       this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    listen(){
       this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}

module.exports = Server;