const generalHelpers = {
    isNullOrEmpty(object){
        if(object === null || object === "" || object === undefined){
            return true
        } 
        else {
            return false
        }
    },
    isEmptyArray(array){
      if(Array.isArray(array) && array.length == 0)
        {
            return true
        }
        else {
            return false
        }
    } ,
    isArrayOfObjects(array){
        let isArrayOfObjects = true
        array.forEach((element) =>{
            if(typeof(element) != "object"){
                isArrayOfObjects = false
            }
        })
        return isArrayOfObjects
    }
}


module.exports = generalHelpers