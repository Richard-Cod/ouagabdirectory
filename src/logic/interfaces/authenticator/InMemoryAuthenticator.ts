import { User } from "../../models/User";
import { IAuthenticator, LoginPayload, LoginResult, ProfilePayload, RegisterPayload, RegisterResult } from "logic/interfaces/authenticator/IAuthenticator";

class InMemoryAuthenticator implements IAuthenticator{
    login(loginPayload: LoginPayload): Promise<LoginResult> {
        throw new Error("Method not implemented.");
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
    register(registerPayload: RegisterPayload): Promise<RegisterResult> {
        throw new Error("Method not implemented.");
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
    logout(): void {
        throw new Error("Method not implemented.");
    }
    
}

export {InMemoryAuthenticator}