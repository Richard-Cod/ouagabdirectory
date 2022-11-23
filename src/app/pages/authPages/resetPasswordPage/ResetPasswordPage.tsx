import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'constants/constants';
import ResetPasswordPageVM from 'logic/interfaces/viewmodels/ResetPasswordPageVM';
import Input from 'app/components/Input';


const resetPasswordPageVM = new  ResetPasswordPageVM()
function Form() {
    const { uid , token } = useParams();
    const navigate =  useNavigate()

    const formik = useFormik({
        initialValues: resetPasswordPageVM.initialValues,
        validationSchema: resetPasswordPageVM.validationSchema,
        onSubmit: values => {
          if(uid && token)
            resetPasswordPageVM.submitForm(uid , token , values.newPassword)
            navigate(ROUTES.login)
          // formik.setSubmitting(false)
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="New Password" name="newPassword" type="password" formik={formik} />
            <Input label="Confirm Password" name="confirmPassword" type="password" formik={formik} />
            <div className="submit-section">
            <button 
                disabled={formik.isSubmitting}
                type="submit" className="btn btn-primary submit-btn">Save Changes
            </button>
        </div>
                 
        </form>
      )  
}




function ResetPasswordPage() {

    return (
        // <AuthLayout label={undefined}>
        <Form />
    //  </AuthLayout>
    )
}

export default ResetPasswordPage
