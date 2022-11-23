const errorHandler = (err,req,res,next) => {

    if(err.name == 'SequelizeValidationError'){
        res.status(400).json({message: err.errors[0].message})
    }else if(err.name == 'badRequest'){
        res.status(400).json({message: err.message})
    }else if(err.name == 'notFound'){
        res.status(404).json({message: err.message})
    }else{
        res.status(500).json(err)
    }
}

module.exports = errorHandler