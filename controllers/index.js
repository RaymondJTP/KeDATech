const {kendaraan,parkir} = require('../models')

class Controller{
    static async getListJenisKendaraan(req,res,next){
        try {
            const result = await kendaraan.findAll()
            res.status(200).json(result)
        } catch (err) {
            res.json(err)
        }
    }

    static async insertJenisKendaraan(req,res,next){
        try {
            const {jenis,harga} = req.body
            const result = await kendaraan.create({jenis,harga})
            res.status(201).json(result)
        } catch (err) {
            res.json(err)
        }
    }

    static async insertParkir(req,res,next){
        try {
            
        } catch (err) {
            
        }
    }

    static async getHistoryParkir(req,res,next){
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = Controller