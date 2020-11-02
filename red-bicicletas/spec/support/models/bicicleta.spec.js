let mongoose = require('mongoose')
let Bicicleta = require('../../../models/bicicleta')

describe('Testing bicicletas',()=>{
    beforeEach((done)=>{
        let mongoDB = 'mongodb://localhost/testdb'
        mongoose.connect(mongoDB,{useNewUrlParser:true})

        const db = mongoose.connection

        db.on('error',console.error.bind(console,'connection error'))
        db.once('open',()=>{
            console.log('We are connected to test database')
            done()
        })
    })

    describe('Bicicleta.createInstance',()=>{
        it('crea una instancia de bicicleta',()=>{
            let bici = Bicicleta.createInstance(1,"verde","urbana",[-34.5,-54.1])

            expect(bici.code).toBe(1)
            expect(bici.color).toBe("verde")
            expect(bici.modelo).toBe("urbana")
            expect(bici.ubicacion[0]).toBe(-34.5)
            expect(bici.ubicacion[1]).toBe(-54.1)

        })
    })


    describe('Bicicleta.allBIcis',()=>{
        it('Comienza vacía',(done)=>{
            Bicicleta.allBicis((err,bicis)=>{
                expect(bicis.length).toBe(0);
                done()
            })
        })
    })

    describe('Bicicleta.add',()=>{
        it('agrega solo una bici',(done)=>{
            let aBici = new Bicicleta({code:3,color:'red',modelo:'urbana'})
            Bicicleta.add(aBici,(err,newBici)=>{
                if(err) console.log(err);
                Bicicleta.allBicis((err,bicis)=>{
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(aBici.code)
    
                    done()
                })
            })
        })
    })

    afterEach((done)=>{
        Bicicleta.deleteMany({},(err,succ)=>{
            if(err) console.log(err)
            done()
        })
    })


})