import * as Yup from 'yup';
import { ProfilePayload, RegisterPayload } from 'logic/interfaces/authenticator/IAuthenticator';
import { DependencyContainer } from 'logic/interfaces/deps';

class ProfilePageVM{
    dependencyContainer : DependencyContainer;
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }
    initialValues = {
        email:"",
        first_name:"",
        last_name: "",
        address : "",
        phoneNumber: ""
    }
    userSchema = Yup.object({
        email:  Yup.string(),
        first_name:  Yup.string().required("le prénom est requis"),
        last_name:  Yup.string().required("le nom est requis"),
        address:  Yup.string().required("L'adresse est requise"),
        phoneNumber:  Yup.string().required("Le numéro de téléphone est requis").min(8,"Au moins 8 chiffres"),
      });

    save = async (profilePayload:ProfilePayload) => {
        try {
            const result =  await this.dependencyContainer.authenticator.saveProfileInfos(profilePayload);
            return result
        } catch (error : any) {
            console.log(error.message)
        }
      
    }

}

export default ProfilePageVM