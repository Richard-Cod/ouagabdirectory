import * as Yup from 'yup';
import { authErrors } from 'logic/helper/auth';
import { RegisterPayload } from 'logic/interfaces/authenticator/IAuthenticator';
import { DependencyContainer } from 'logic/interfaces/deps';

class RegisterPageVM{
    dependencyContainer : DependencyContainer;
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }
    initialValues = {email : "user1@gmail.com" ,password : "testPassword",
    first_name:"first_name",
    last_name: "last_name"}
    userSchema = Yup.object({
        first_name:  Yup.string().required("le prénom est requis"),
        last_name:  Yup.string().required("le nom est requis"),
        email:  Yup.string().email("Le mail est invalide ").required("le mail est requis"),
        password:  Yup.string().min(8 ,  "Minimun 8 lettres please ").required("le mot de passe est requis"),
      });

    register = async (registerPayload:RegisterPayload) => {
        try {
            const result =  await this.dependencyContainer.authenticator.register(registerPayload);
            console.log(result)
        } catch (error : any) {
            console.log(error.message)
            if(error.message === authErrors.userAlreadyExist){
               alert("Cet utilisateur existe déja")
            }
            if(error.message === authErrors.passwordTooWeak){
               alert("Mot de passe trop faible")
            }

            
        }
      
    }

    registerWithGoogle = () => {
        this.dependencyContainer.authenticator.registerWithGoogle()
    }

    registerWithFacebook = () => {
        this.dependencyContainer.authenticator.registerWithFacebook()
    }

}

export default RegisterPageVM