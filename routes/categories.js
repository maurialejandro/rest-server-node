const { Router } = require('express');
const { check } = require('express-validator');
const { 
    getCategories, 
    getOneCategorie, 
    postCategorie,
    putCategorie,
    deleteCategorie
} = require('../controllers/categories');

const router = Router();

// Obtener todas las categorias
router.get('/',[
], getCategories)

// Obtener una categoria
router.get('/:id', [

],getOneCategorie)

// Crear categoria - privado - cualquier user con token
router.post('/', [

], postCategorie)

// Actualizar - privado - cualquier user con token
router.put('/:id', [

], putCategorie)

// Borrar categoria - solo user Admin

router.delete('/:id', [

], deleteCategorie)

module.exports = router;