const {kendaraan,parkir} = require('../models')

class Controller{
    static async getListJenisKendaraan(req,res,next){
        try {
            const result = await kendaraan.findAll()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async insertJenisKendaraan(req,res,next){
        try {
            const {jenis,hargaPerJam,hargaPerHari} = req.body
            const result = await kendaraan.create({jenis,hargaPerJam,hargaPerHari})
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async insertParkir(req,res,next){
        try {
            const {plat,jenis,waktuMasuk, waktuKeluar} = req.body
            
            if(!jenis){
                throw ({name : 'badRequest', message : 'Isi jenis kendaraan dengan id kendaraan'})
            }
            function cekTahun(tanggal){
                let tahun = ''
                for(let i = 0; i < tanggal.length; i++){
                    if(i == 4) break;
                    tahun += tanggal[i]
                }
                return isNaN(tahun)
            }

            if(cekTahun(waktuMasuk) || cekTahun(waktuKeluar)){
                throw ({name : 'badRequest', message : 'Masukkan waktu dengan format YYYY/MM/DD HH:MM:SS seperti 2022/09/17 06:00:00'})
            }
            
            let diff = Math.abs(new Date(waktuKeluar) - new Date(waktuMasuk))
            let menit = Math.ceil((diff/1000)/60)
            let harga
            let sisaMenit
            let jam
            let hari
            let sisaJam
            if(menit > 60){
                sisaMenit = menit % 60
                jam = (menit - sisaMenit)/60
            }else{
                jam = 1
            }

            if(sisaMenit > 1) jam++

            if(jam >= 24){
                sisaJam = jam % 24
                hari = (jam - sisaJam)/24
            }

            if(sisaJam) jam = sisaJam

            if(!hari) hari = 0

            const jenisKendaraan = await kendaraan.findOne({
                where : {
                    id : +jenis
                }
            })

            if(!jenisKendaraan){
                throw ({name : 'notFound', message: `jenis kendaraan dengan id ${jenis} tidak ditemukan`})
            }

            harga = hari * jenisKendaraan.hargaPerHari + jam * jenisKendaraan.hargaPerJam

            const insertParkir = await parkir.create({
                plat, jenis, waktuMasuk, waktuKeluar, biayaParkir : harga
            })

            res.status(201).json(insertParkir)
        } catch (err) {
            next(err)
        }
    }

    static async getHistoryParkir(req,res,next){
        try {
            const result = await parkir.findAll({
                include : kendaraan
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller