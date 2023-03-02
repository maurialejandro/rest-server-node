const { response, request } = require('express')

const usersGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API',
        query
    })
}

const usersPut = (req, res) => {
    const id = req.params.id
    
    res.json({
        msg: 'put API',
        id
    })
}

const usersPost =  (req = request, res) => {
    const { nombre, edad }  = req.body;
    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}
