const Cars = require('./carModel')

const status = (res, data, status) => {
    return res.status(status).json(data);
  };

  const GetCars = async( req , res) => {
    const {id} = req.params

    try{
        console.log('here')
        const data = await Cars.get(id)
    
        status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Cars', 500)
    }
  }


  const AddCars = async(req ,res) => {
      const {name , budget} = req.body
      try{
          const data = await Cars.insert({name , budget})
          status(res ,data , 200)
      }
      catch(err){
          status(res, 'Cannot Add Cars', 500)
      }
  }

  const UpdateCar = async(req, res) => {
      const {id} = req.params;
      const {name , budget} = req.body

      try{
        const data = await Cars.update(id ,{name , budget})
        status(res ,data , 200)
    }
    catch(err){
        status(res, 'Cannot Update Cars', 500)
    }
  }

  const DeleteCar = async(req, res) => {
      const {id} = req.params;
      try{
          await Cars.remove(id)
          status(res, "Car Deleted", 200)
      }
      catch(err){
          status(res , 'Cannot Delete Car' , 500)
      }
  }

  module.exports = ({
    AddCars,UpdateCar,DeleteCar, GetCars
  })