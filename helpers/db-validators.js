const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async ( role = '' ) => {
    
    const existRole = await Role.findOne({ role });
    
    if( !existRole ){
        throw new Error(`El rol ${ role } no está registrado en la db`)
    }
}

const userEmailExist = async ( email= '' ) => {

    const existeEmail = await User.findOne({ email });

    // Verificar correo
    if(existeEmail){
        throw new Error(`Este correo: ${ email } esta registrado`)
    }   
}

const isValidUserId = async ( id  ) => {

    const user = await User.findById({ _id: id })
    if(!user){
        console.log('no existe el usuario entonces no actualizar')
        throw new Error('El ID ingresado no es correcto')
    }
}
module.exports = {
    isValidRole,
    userEmailExist,
    isValidUserId
}