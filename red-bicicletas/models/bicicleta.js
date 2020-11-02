let mongoose = require('mongoose')
let Schema = mongoose.Schema

let bicicletaSchema = new Schema({
    code: Number,
    color: String,
    modelo: String,
    ubicacion:{
        type:[Number], index:{type:'2dsphere',sparse:true}
    }
})

bicicletaSchema.statics.createInstance = function(code,color,modelo,ubicacion){
    return new this({
        code,
        color,
        modelo,
        ubicacion
    })
}

bicicletaSchema.statics.add = (bici,cb)=>{
    this.create(bici,cb)
}

bicicletaSchema.methods.toString = function(){
    return `code: ${this.code} | color: ${this.color}`   
}

bicicletaSchema.statics.allBicis = (cb)=>{
    return this.find({},cb)
}


module.exports = mongoose.model('Bicicleta',bicicletaSchema)
