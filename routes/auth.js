const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campo');
const router = Router();


router.post('/',[
    check('email', 'Email es obligatorio').isEmail(),
    check('pass', 'Contraseña es obligatoria').isEmpty(),
    validarCampos
] , login)

module.exports = router;