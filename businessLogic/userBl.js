import dataAccess from '../dataLayer/dataAccess'
const dataAccess = require('../dataLayer/dataAccess')


 const UserBl = {
    async postUsers(entityType, entity){
      const res =  await dataAccess.post(entityType , entity)
      return res
   }

}

export default UserBl