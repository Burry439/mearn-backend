//import generalHelpers from "./generalHelpers"

const generalHelpers = require('./generalHelpers')

const queryStringHelpers = {

    normalizeQueryStringParams (queryParams){
        queryParams = JSON.parse(queryParams)
        try{
            require(`../dataLayer/models/${queryParams.model}`)
        } catch (e){
            console.log("e.code" + e.code)
                throw new Error("Model does not exist");
        }
        queryParams.filters = this.normalizeQueryStringFilter(queryParams.filters)

         if(generalHelpers.isNullOrEmpty(queryParams.fields)){
             queryParams.fields = ""
         }

         if(generalHelpers.isNullOrEmpty(queryParams.skip) || typeof(queryParams.skip) != "number"){
             queryParams.skip = 0
         }

         if(generalHelpers.isNullOrEmpty(queryParams.limit) || typeof(queryParams.skip) != "number"){
             queryParams.limit = 0
         }
        return queryParams
    } ,

    normalizeUpdateAndDeleteQueryStringParams (queryParams){
        queryParams = JSON.parse(queryParams)
        try{
            require(`../dataLayer/models/${queryParams.model}`)
        } catch (e){
            console.log("e.code" + e.code)
                throw new Error("it dont exist");
        }

        queryParams.filters = this.normalizeUpdateAndDeleteQueryStringFilter(queryParams.filters)
        return queryParams
    } ,


    normalizeUpdateAndDeleteQueryStringFilter(filter) {
        if(generalHelpers.isNullOrEmpty(filter))
        {
            throw new Error("invalid filter")
        }

        else if(typeof(filter) != "object")
        {
            throw new Error("invalid filter")
        }
            return filter
        
    },

    normalizeQueryStringFilter(filter){
        if(generalHelpers.isNullOrEmpty(filter))
        {
            return filter = {}
        }

        else if(typeof(filter) != "object")
        {
            throw new Error("invalid filter")
        }
        return filter
   
    }
}

module.exports = queryStringHelpers