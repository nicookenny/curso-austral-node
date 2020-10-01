let Bicicleta = require('../../models/bicicleta')

exports.bicicleta_list = (req,res)=>{
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}

exports.bicicleta_create = (req,res)=>{
    let bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo)
    bici.ubicacion = [req.body.lat,req.body.lng]

    Bicicleta.add(bici);

    res.status(200).json({
        bicicleta:bici
    })
}

exports.bicicleta_delete = (req,res)=>{
    console.log(req.body.id)
    Bicicleta.removeByID(req.body.id)

    res.status(204).send()
}