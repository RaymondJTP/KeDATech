const router = require('express').Router()
const controller = require('../controllers/index')
const errorHandler = require('../middlewares/errorHandler')

router.get('/getListJenisKendaraan', controller.getListJenisKendaraan)
router.get('/getHistoryParkir', controller.getHistoryParkir)
router.post('/insertJenisKendaraan', controller.insertJenisKendaraan)
router.post('/insertParkir', controller.insertParkir)
router.use(errorHandler)

module.exports = router