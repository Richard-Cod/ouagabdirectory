import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ROUTES } from 'constants/constants';
import makeRequest from 'logic/helper/makeRequest';

class ResetPasswordPageVM{
    initialValues = {oldPassword : "" , newPassword : "" , confirmPassword : ""}
    validationSchema = Yup.object({
        newPassword:  Yup.string().required("le newPassword est requis"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required()
     ,
      });

     async submitForm(uid :string , token : string , new_password : string){
        const config : AxiosRequestConfig<any> = {
          method: 'post',
          url: '/djoser/users/reset_password_confirm/',
          data : {uid , token , new_password}
        };
        
        const handleErrorReponse = (error : AxiosError) => {
          const data : any = error.response?.data
          if(data){

            if(data.token[0]){
              toast("Ce lien de réinitialisation n'est plus valide ")
              window.location.href = ROUTES.forgetPassword
              return
            }
            toast(JSON.stringify(data))
          }
        }

        try {
          const result = await makeRequest(config , handleErrorReponse)
          toast("Votre mot de passe a bien été changé ! connectez vous")
          return result
        } catch (error) {
        }

      }

}

export default ResetPasswordPageVM