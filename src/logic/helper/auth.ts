import appConstants from "constants/constants"
import { LocalDataRepository } from "logic/interfaces/LocalDataRepository"

const removeToken = async () => {
    const ldr = new LocalDataRepository()
    await ldr.remove(appConstants.ACCESS_TOKEN_KEY)
  }

const getToken = async () => {
    const ldr = new LocalDataRepository()
    const token = await ldr.get(appConstants.ACCESS_TOKEN_KEY)
    return token
  }
  const getAuthHeader = async () => {
    const token = await getToken()
    return {
      Authorization : `Bearer ${token}`
    }
  
  }


const authErrors = {
  userAlreadyExist : "userAlreadyExist",
  userNotFound:"userNotFound",
  passwordTooWeak : "passwordTooWeak"
}





export {getToken,getAuthHeader,removeToken,authErrors}