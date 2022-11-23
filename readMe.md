1. npm install di command line
2. sequelize db:create
3. sequelize db:migrate
4. sequelize db:seed:all
5. jest (untuk melakukan testing)
6. nodemon bin/wwww untuk running app

ENDPOINT:
1. http://localhost:3000/getListJenisKendaraan
    description : untuk mendapat list jenis kendaraan dan harga per jam dan per hari
    method : 'get'
    response : [
        {
            "id": 1,
            "jenis": "motor",
            "hargaPerJam": 2000,
            "hargaPerHari": 40000,
            "createdAt": "2022-11-23T19:06:00.617Z",
            "updatedAt": "2022-11-23T19:06:00.617Z"
        },
        {
            "id": 2,
            "jenis": "mobil",
            "hargaPerJam": 5000,
            "hargaPerHari": 80000,
            "createdAt": "2022-11-23T19:06:00.617Z",
            "updatedAt": "2022-11-23T19:06:00.617Z"
        }
    ]

2. http://localhost:3000/insertJenisKendaraan
    description : untuk memasukkan jenis kendaraan dalam parkiran serta dapat menentukan harga per jam dan per hari dari jenis kendaraan itu.
    method: 'post'
    Content-Type : application/x-www-form-urlencoded

    request : 
        jenis : motor
        hargaPerJam : 2000
        hargaPerHari : 40000
    
    response : {
        "id": 1,
        "jenis": "motor",
        "hargaPerJam": 2000,
        "hargaPerHari": 4000,
        "updatedAt": "2022-11-23T19:14:11.174Z",
        "createdAt": "2022-11-23T19:14:11.174Z"
    }    

3. http://localhost:3000/getHistoryParkir
    description : untuk meelihat parkir yang tercatat beserta besar biayanya
    response : [
        {
            "id": 1,
            "plat": "B 3255 CD",
            "jenis": 1,
            "waktuMasuk": "2022-09-16T17:00:00.000Z",
            "waktuKeluar": "2022-09-16T18:02:00.000Z",
            "biayaParkir": 4000,
            "createdAt": "2022-11-23T19:18:32.220Z",
            "updatedAt": "2022-11-23T19:18:32.220Z",
            "kendaraan": {
                "id": 1,
                "jenis": "motor",
                "hargaPerJam": 2000,
                "hargaPerHari": 40000,
                "createdAt": "2022-11-23T19:06:00.617Z",
                "updatedAt": "2022-11-23T19:06:00.617Z"
            }
        }
    ]

4. http://localhost:3000/insertParkir
    description : untuk memasukkan data kendaraan yang parkir beserta kalkulasi harga parkir
    method: 'post'
    Content-Type : application/x-www-form-urlencoded

    request : 
        plat : B 4444 DD
        jenis : 1 
        waktuMasuk : 2022/09/17 00:00:00
        waktuKeluar : 2022/09/17 01:02:00 
    **NOTES
    1. untuk jenis, masukkan sesuai dengan id dari jenis kendaraan yang sudah dimasukkan di endpoint http://localhost:3000/insertJenisKendaraan

    2. waktuMasuk dan waktuKeluar harus mengikuti format

    response : {
        "id": 1,
        "plat": "B 3255 CD",
        "jenis": 1,
        "waktuMasuk": "2022-09-16T17:00:00.000Z",
        "waktuKeluar": "2022-09-16T18:02:00.000Z",
        "biayaParkir": 4000,
        "updatedAt": "2022-11-23T19:18:32.220Z",
        "createdAt": "2022-11-23T19:18:32.220Z"
    }
    