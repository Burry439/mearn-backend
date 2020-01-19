const router = require('express').Router()
const dataAccess = require('../dataLayer/dataAccess')
const queryStringHelper = require('../helpers/queryStringHelpers')


router.get('/users', (req, res) => {
const queryParams = queryStringHelper.normalizeQueryStringParams(req.query.queryParams)
  dataAccess.get(queryParams.model, queryParams.filters, queryParams.fields, queryParams.skip, queryParams.limit).then((result) =>{
    return res.send(result)
  })
});

router.post('/users', (req, res) => {  
const model = req.body.model
const entity = req.body.entity
  dataAccess.post(model, entity).then((result) =>{
    return res.send(result)
  })
});

 router.put('/users', (req, res) => {
    const queryParams = queryStringHelper.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams)
    const fieldsToUpdate = req.body.fields
    dataAccess.update(queryParams.model, queryParams.filters, fieldsToUpdate).then((result) =>{
      return res.send(result)
   })
})
   
  
  router.delete('/users', (req, res) => {
    const queryParams = queryStringHelper.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams)
    dataAccess.delete(queryParams.model, queryParams.filters).then((result) =>{
         return res.send(result)
    })
})
module.exports = router

