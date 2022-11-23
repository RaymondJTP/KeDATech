const request = require("supertest")
const app = require("../app")
const {kendaraan, parkir} = require("../models")
const appRequest = request(app)

beforeAll(async () => {
    await kendaraan.destroy({truncate: true, restartIdentity: true, cascade: true})
    await parkir.destroy({truncate: true, restartIdentity: true, cascade: true})

    let kendaraan1 = {
        jenis : 'motor',
        hargaPerJam : 2000,
        hargaPerHari: 40000,
    }

    let parkir1 = {
        plat : 'D 1663 FQ',
        jenis : 1,
        waktuMasuk : '2022/09/16 00:00:00',
        waktuKeluar : '2022/09/16 01:02:00'
    }

    await kendaraan.create(kendaraan1)
    await parkir.create(parkir1)
})

describe("Testing Parkir", function () {
    describe("Testing Kendaraan", function (){
        test('Get list jenis kendaraan beserta harganya', function(done){
            request(app)
                .get("/getListJenisKendaraan")
                .expect(200)
                .then((response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.statusCode).toEqual(200);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        })

        test('Insert jenis kendaraan dan waktu', function(done){
            const kendaraan = {
                jenis : 'mobil',
                hargaPerJam : 5000,
                hargaPerHari : 80000
            }
            request(app)
                .post("/insertJenisKendaraan")
                .send(kendaraan)
                .then((response) =>{
                    expect(201);
                    expect(response.body.id).toEqual(2);
                    done()
                })
                .catch(err => {
                    done(err)
                })
        })
    })

    describe("Testing Parkir", function(){
        test('Get list history parkir', function(done){
            request(app)
                .get("/getHistoryParkir")
                .expect(200)
                .then((response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.statusCode).toEqual(200);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        })

        test('Insert parkir', function(done){
            const parkir2 = {
                plat : 'B 5555 CD',
                jenis : 1,
                waktuMasuk : '2022/09/16 00:00:00',
                waktuKeluar : '2022/09/16 01:00:00'
            }
            request(app)
                .post("/insertParkir")
                .send(parkir2)
                .then((response) =>{
                    expect(201);
                    expect(response.body.biayaParkir).toEqual(2000);
                    done()
                })
                .catch(err => {
                    done(err)
                })
        })

        test('Insert parkir tapi waktunya bukan format waktu', function(done){
            const parkir3 = {
                plat : 'B 5555 CD',
                jenis : 1,
                waktuMasuk : 'jam 7',
                waktuKeluar : '2022/09/17 01:02:00'
            }
            request(app)
                .post("/insertParkir")
                .send(parkir3)
                .then((response) =>{
                    expect(400);
                    expect(response.body.message).toEqual('Masukkan waktu dengan format YYYY/MM/DD HH:MM:SS seperti 2022/09/17 06:00:00');
                    done()
                })
                .catch(err => {
                    done(err)
                })
        })
        
    })
})