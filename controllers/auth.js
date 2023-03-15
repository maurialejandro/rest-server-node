const { response } = require('express');
const { check } = require('express-validator');

const login = (req, res) => {
    
    res.json({
        msg: 'Login ok'
    })
}

module.exports = {
    login
};