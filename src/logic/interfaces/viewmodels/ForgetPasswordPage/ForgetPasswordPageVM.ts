import { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import makeRequest from 'logic/helper/makeRequest';

class ForgetPasswordPageVM{
    initialValues = {email : "admin@gmail.com"}
    formSchema = Yup.object({
      email:  Yup.string().email("Le mail est invalide ").required("le mail est requis"),
    });


     async submitForm(email : string){
        const config : AxiosRequestConfig<any> = {
          method: 'post',
          url: '/djoser/users/reset_password/',
          data : {email}
        };
        
        const handleErrorReponse = (error : AxiosError) => {
          const data = error.response?.data
          if(data){
            toast(JSON.stringify(data))
          }
        }

        try {
          const result = await makeRequest(config , handleErrorReponse)
          toast("Vous avez recu un mail ;)")
          return result
        } catch (error) {
        }

      }

}

export default ForgetPasswordPageVM