import * as Yup from 'yup';

class ChangePasswordPageVM{
    initialValues = {oldPassword : "" , newPassword : "" , confirmPassword : ""}
    validationSchema = Yup.object({
        oldPassword:  Yup.string().required("le oldPassword est requis"),
        newPassword:  Yup.string().required("le newPassword est requis"),
        confirmPassword:  Yup.string().required("le confirmPassword est requis"),
      });

}

export default ChangePasswordPageVM