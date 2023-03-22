const Categorie = require('../models/categorie');
const bcryptjs = require('bcryptjs');

const getCategories = (req, res) => {

    res.status(200).json({
        msg: 'Wena esta ruta entrega todas las categorias'
    })
}

const getOneCategorie = (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        msg: 'Wena esta ruta entrega una las categorias',
        id
    })
}

const postCategorie = (req, res) => {

    // obtener token y verificar 
    res.status(200).json({
        msg: 'Wena esta ruta crea una categoria'
    })
}

const putCategorie = (req, res) => {

    res.status(200).json({
        msg: 'Wena esta ruta actualiza una categoria'
    })
}

const deleteCategorie = (req, res) => { 
    const id = req.params.id;

    console.log(id)
    res.status(200).json({
        msg: 'wena esta ruta elimina una categoria'
    })
}

module.exports = { 
    getCategories,
    getOneCategorie,
    postCategorie,
    putCategorie,
    deleteCategorie
}
