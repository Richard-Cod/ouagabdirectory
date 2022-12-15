import * as Yup from 'yup';
import appConstants from 'constants/constants';
import { authErrors } from 'logic/helper/auth';
import { LoginPayload } from 'logic/interfaces/authenticator/IAuthenticator';
import { DependencyContainer } from 'logic/interfaces/deps';
import { LocalDataRepository } from 'logic/interfaces/LocalDataRepository';

class LoginPageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    initialValues = {email : "gmail.com" , password : "admin"}

    userSchema = Yup.object({
        email:  Yup.string().email("Le mail est invalide ").required("Le mail est requis"),
        password:  Yup.string().min(4 ,  "Minimun 4 lettres s'il vous plaît ").required("Le mot de passe est requis"),
      });

      login = async (loginPayload : LoginPayload) : Promise<void> => {
        try {
            const result = await this.dependencyContainer.authenticator.login(loginPayload)
            const ldr = new LocalDataRepository()
            ldr.save(appConstants.ACCESS_TOKEN_KEY,result.access)
            ldr.save(appConstants.REFRESH_TOKEN_KEY,result.refresh)
            
        } catch (error : any) {
            console.log(error.message)
            if(error.message === authErrors.userNotFound){
                alert("Utilisateur introuvable")
            }
            
        }

    }

    


    loginWithGoogle = () => {
        this.dependencyContainer.authenticator.loginWithGoogle()
    }

    loginWithFacebook = (email : string , password : string) => {
        this.dependencyContainer.authenticator.loginWithFacebook()
    }

}

export default LoginPageVM
