const { response } = require('express');
const { check } = require('express-validator');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generateJWT');

const login = async (req, res) => {
    
    try {
        const { email, pass } = req.body;
        // Verify if email exist
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                msg: 'Usuario o pass incorrecto - correo'
            });
        }
        // is user active
        if(!user.state){
            return res.status(400).json({
                msg: 'Usuario o pass incorrecto - estado: false'
            });
        }
        // verify pass
        const isValidPass = bcryptjs.compareSync( pass, user.pass );
        if( !isValidPass ){
            return res.status(400).json({
                msg: 'Usuario o pass incorrecto - password: false'
            });
        }
    
        // Generar el JWT
        const token = await generateJWT( user.id ) 
        
        res.json({
            msg: 'Login ok',
            user,
            token
        })
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    login
};