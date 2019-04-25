const { Router } = require('express')
const Advert = require('./model')

const router = new Router()

router.get('/adverts', (req, res, next) => {
    const limit = req.query.limit || 10
    const offset = req.query.offset || 0
  
    Promise.all([
        Advert.count(),
        Advert.findAll({limit, offset})])
              .then(([total, adverts]) => {
                res.send({ adverts, total })
              })
              .catch(error => next(error))
      })
    
  
router.get('/adverts/:id', (req, res, next)=>{
    Advert
        .findByPk(req.params.id)
        .then(advert=> {
            if (!advert){
                return res.status(404).send({
                    message:`Advert does not exist`
                })            
        }
        return res.send(advert)
    })
    .catch(error => next(error))
})

router.post('/adverts', (req,res,next)=>{
    Advert
        .create(req.body)
        .then(advert =>{
            if (!advert){
                return res.status(404).send({
                    message: `advert does not exist`
            })
        }
        return res.status(201).send(advert)
})
        .catch(error => next(error))
})


module.exports = router