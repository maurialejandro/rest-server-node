const { ObjectId } = require('mongoose').Types;
const { response } = require('express');
const User = require('../models/user');

const collectionAllowed = [
    'users',
    'categories',
    'products',
    'roles'
]

const searchUsers = async ( termino = '', res = response ) => {
    const isMongoID = ObjectId.isValid( termino ); 
    if( isMongoID ){
        const user = await User.findById( termino )
        return res.json({
            result: ( user ) ? [ user ] : []
        })
    }
    const regex = new RegExp( search, 'i' );

    const user = await User.find({ name: regex });
    res.json({
        result: user
    })
}
const search = async ( req, res) => {
const { collection, search } = req.params;
    
    if( !collectionAllowed.includes( collection )){
        return res.status(400).json({
            msg: 'Las colecciones permitidas son: ',
            collectionAllowed
        })
    }

    switch (collection) {
        case 'users':
            searchUsers( search )
        break;
    
        case 'categories':
        break;

        case 'products':
        break;
        default:
            res.status(500).json({
                msg: 'Se meolvido hacer esta busqueda'
            })
    }
    
}


module.exports = {
    search
}