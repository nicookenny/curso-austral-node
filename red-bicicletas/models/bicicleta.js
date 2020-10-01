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
    let Bici = Bicicleta.findById(ID)

    for(let i = 0;i<Bicicleta.allBicis.length;i++){
        if(Bicicleta.allBicis[i].id == ID){
            Bicicleta.allBicis.splice(i,1)
            break
        }
    }
}



let a = new Bicicleta("1",'Rojo','Kawasaki',[-34.6012,-58.3861])
let b = new Bicicleta("2",'Verde','Honda',[-34.4012,-58.5861])

Bicicleta.add(a)
Bicicleta.add(b)


module.exports = Bicicleta