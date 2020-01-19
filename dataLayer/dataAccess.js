const dataAccess = {

    async get(modelType, filters, fields, skip, limit)
    {
        const model = require(`./models/${modelType}`)
        return await model.find(filters, fields, {skip:skip, limit:limit})
    },

    async post(modelType, entity )
    {
        console.log(entity)
        const model =  require(`./models/${modelType}`)
        const res =  await model.create(entity)
        return res
    },


    async update(modelType, filters, entity)
    {
        const model =  require(`./models/${modelType}`)
        const res = await model.updateMany(filters, entity)
        return res
    },

    async delete(modelType, filters)
    {
        const model =  require(`./models/${modelType}`)
        const res = await model.remove(filters)
        return res
    }
}

module.exports = dataAccess