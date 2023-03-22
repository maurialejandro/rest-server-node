const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSingIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campo');

const router = Router();

router.post('/',[
    check('email', 'Email es obligatorio').isEmail(),
    check('pass', 'Contraseña es obligatoria').isLength({ min:6 }),
    validarCampos
] , login)

router.post('/google',[
    check('id_token', 'id_token es necesario').not().isEmpty(),
    validarCampos
] , googleSingIn)

module.exports = router;