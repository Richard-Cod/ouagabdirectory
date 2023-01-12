import { User } from "../../models/User";
import { IAuthenticator, LoginPayload, LoginResult, ProfilePayload, RegisterPayload, RegisterResult } from "logic/interfaces/authenticator/IAuthenticator";

class InMemoryAuthenticator implements IAuthenticator{

    login(loginPayload: LoginPayload): Promise<LoginResult | null> {
        console.log(loginPayload)
        const prom = new Promise<null>((resolve) => {
            setTimeout(() => {
              resolve(null);
            }, 2000);
          });
          return prom
    }
    me(): Promise<User> {
        const user : User = {
            id: 1,
            email: "email@gmail.com",
            gender: "Male",
            first_name: "John",
            last_name: "Doe",
            profile_pic: "",
            phoneNumber: "",
            address: ""
        }

       return  Promise.resolve(user)
    }
    loginWithGoogle(): void {
        throw new Error("Method not implemented.");
    }
    loginWithFacebook(): void {
        throw new Error("Method not implemented.");
    }
    register(registerPayload: RegisterPayload): Promise<RegisterResult | null> {
        console.log(registerPayload)
        const prom = new Promise<null>((resolve) => {
            setTimeout(() => {
              resolve(null);
            }, 8000);
          });
          return prom

    }
    saveProfileInfos(profilePayload: ProfilePayload): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    registerWithGoogle(): void {
        throw new Error("Method not implemented.");
    }
    registerWithFacebook(): void {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<boolean> {
        alert("deconnexion")
        return Promise.resolve(true)
    }
    
    
}

export {InMemoryAuthenticator}