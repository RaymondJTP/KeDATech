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
        hargaPerHari: 4000,
    }

    await kendaraan.create(kendaraan1)
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
    })
})