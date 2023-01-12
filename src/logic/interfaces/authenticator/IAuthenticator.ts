import { User } from "logic/models/User";

export interface LoginResult {
    access : string,
    refresh : string,
}

export interface RegisterResult {
    email : string,
    id : number
}

export interface LoginPayload {
    email : string,
    password : string,
}
export interface RegisterPayload {
    first_name : string,
    last_name : string,
    email : string,
    password : string,
}

export interface ProfilePayload {
    first_name : string,
    last_name : string,
    email : string,
    address:string,
    phoneNumber:string
}

interface IAuthenticator{
    login(loginPayload:LoginPayload) : Promise<LoginResult | null>

    me() : Promise<User>

    loginWithGoogle() : void

    loginWithFacebook() : void

    register(registerPayload:RegisterPayload) : Promise<RegisterResult | null>
    saveProfileInfos(profilePayload:ProfilePayload) : Promise<boolean>

    registerWithGoogle() : void

    registerWithFacebook() : void
    
    logout() : void

}

export  type {IAuthenticator }