const { Schema , model } = require('mongoose');
const bcrypt = require('bcryptjs'); 

//MODELADO DE DATOS
const UserSchema = new Schema({
    name : { type : String , required : true } ,
    email : { type : String , required : true , unique :true},
    password : { type : String , required : true}
}, {
    timestamps : true
});

//ENCRIPTANDO CON METHODS
UserSchema.methods.encryPass = async (password) => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);//ENCRIPTANDO
}

//DESENCRIPTANDO
UserSchema.methods.matchPass = async function (password) {
   return await bcrypt.compare(password, this.password);
}


//CREACION DEL MODELO
module.exports = model('User' , UserSchema);