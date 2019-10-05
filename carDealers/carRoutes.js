const express = require('express')
const router = express.Router()

const Cars = require('./carController')
const {validateCarId ,validateCar} = require('../helpers/validation')
router.get('/', Cars.GetCars )
router.get('/:id',validateCarId, Cars.GetCars )
router.post('/' , validateCar, Cars.AddCars)
router.put('/:id',validateCarId, validateCar , Cars.UpdateCar)
router.delete('/:id', validateCarId, Cars.DeleteCar)

module.exports= router