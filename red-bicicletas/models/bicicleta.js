let Bicicleta = function(id,color,modelo,ubicacion){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion

}

Bicicleta.prototype.toString = function(){
    return `id: ${this.id} | color: ${this.color}`   
}

Bicicleta.allBicis = []
Bicicleta.add = (Bici)=>{
    Bicicleta.allBicis.push(Bici)
}

Bicicleta.findById = function(ID){
    let Bici = Bicicleta.allBicis.find(x => x.id == ID)

    if(Bici){
        return Bici
    }else{
        throw new Error('No existe una bicicleta con ese ID')
    }
}

Bicicleta.removeByID =(ID)=>{
    //Si no existe ese ID tira el error, por eso se pone esto // "Validación"

    for(let i = 0;i<Bicicleta.allBicis.length;i++){
        if(Bicicleta.allBicis[i].id == ID){
            Bicicleta.allBicis.splice(i,1)
            break
        }
    }
}


let a = new Bicicleta(1,"Verde","Kawasaki",[-34.6364815,-58.3730608])
let b = new Bicicleta(1,"Celeste","Honda",[-34.7364815,-58.3230608])

Bicicleta.add(a)
Bicicleta.add(b)

module.exports = Bicicleta