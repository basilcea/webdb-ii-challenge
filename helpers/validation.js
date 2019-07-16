const Car = require('../carDealers/carModel')


const validateCarId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Car.get(id);
    
      if (!data) {
        return res.status(400).json({ message: "invalid Car id" });
      }
      req.Car = data
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };


  const validateCar = async (req, res, next) => {
  
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing Car data" });
      }
      if (!req.body.VIN) {
        return res.status(400).json({ message: "missing required VIN field" });
      }
      if (!req.body.Make) {
        return res.status(400).json({ message: "missing required Make field" });
      }if (!req.body.Model) {
        return res.status(400).json({ message: "missing required Model field" });
      }
      if (!req.body.Mileage) {
        return res.status(400).json({ message: "missing required Mileage field" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  

  
  module.exports = ({
    validateCarId,
    validateCar,
  
  });