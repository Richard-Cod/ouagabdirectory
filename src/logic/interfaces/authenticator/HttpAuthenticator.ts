import {IAuthenticator, LoginPayload, LoginResult, ProfilePayload, RegisterPayload, RegisterResult } from "./IAuthenticator"
import  { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponseTransformer } from 'axios';
import makeRequest from "logic/helper/makeRequest";
import { User } from "logic/models/User";
import appConstants from "constants/constants";
import { LocalDataRepository } from "logic/interfaces/LocalDataRepository";
import { authErrors, getAuthHeader, removeToken } from "logic/helper/auth";

const djangoUserExist = "user with this email address already exists."
const djangoUserNotFound = "No active account found with the given credentials"

class HttpAuthenticator implements IAuthenticator{
    constructor(){
    }
  async saveProfileInfos(profilePayload: ProfilePayload): Promise<boolean> {
      const config : AxiosRequestConfig<any> = {
        method: 'post',
        url: 'update_profile_infos/',
        data : profilePayload,
        headers : await getAuthHeader(),

      };

      const handleErrorReponse = (error : AxiosError) => {
          const data : any = error.response?.data
          if(data){
          }
        }
    
        try {
          const r = await makeRequest(config , handleErrorReponse)

          console.log("requete")
          return true
        } catch (error) {
          return false
        }
  }
  async logout(): Promise<void> {
    await removeToken()
  }

  async me(): Promise<User> {

    const config : AxiosRequestConfig<any> = {
      method: 'get',
      url: 'djoser/users/me/',
      headers: await getAuthHeader()
    };
    
    const handleErrorReponse = (error : AxiosError) => {
      const data = error.response?.data
      if(data){
        // toast(JSON.stringify(data))
      }
    }

    const result : User = await makeRequest(config , handleErrorReponse)
    return result
  }
    async login(loginPayload : LoginPayload){
      const config : AxiosRequestConfig<any> = {
        method: 'post',
        url: '/authjwt/jwt/create',
        data : loginPayload
      };
      
      const handleErrorReponse = (error : AxiosError) => {
        const data : any = error.response?.data
        if(data){
          if(data.detail && data.detail  === djangoUserNotFound){
            throw new Error(authErrors.userNotFound)
          }
        }
      }

      const result : LoginResult = await makeRequest(config , handleErrorReponse)
      return result
    }

    loginWithGoogle(){
    }

    loginWithFacebook(){
    }

    async register(registerPayload:RegisterPayload){
      const config : AxiosRequestConfig<any> = {
        method: 'post',
        url: '/djoser/users/',
        data : registerPayload
      };


    const handleErrorReponse = (error : AxiosError) => {
        const data : any = error.response?.data
        if(data){
          if(data.email && data.email && data.email[0] && data.email[0] === djangoUserExist){
            throw new Error(authErrors.userAlreadyExist)
          }

          if(data.password && data.password){
            throw new Error(authErrors.passwordTooWeak)
          }

        }
      }
      
      const result : RegisterResult = await makeRequest(config , handleErrorReponse)
      return result
    }
    
    registerWithGoogle(){
    }

    registerWithFacebook(){
    }

}

export default HttpAuthenticator