import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'constants/constants';
import ForgetPasswordPageVM from 'logic/interfaces/viewmodels/ForgetPasswordPage/ForgetPasswordPageVM';
import Input from 'app/components/Input';
// import AuthLayout from '../../templates/layout/AuthLayout';
// import ProfilLayout from '../../templates/layout/ProfilLayout';

const forgetPasswordPageVM = new  ForgetPasswordPageVM()
function Form() {

    const formik = useFormik({
        initialValues: forgetPasswordPageVM.initialValues,
        validationSchema: forgetPasswordPageVM.formSchema,
        onSubmit: values => {
          try {
            forgetPasswordPageVM.submitForm(values.email)
          } catch (error) {
            
          }
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
           <div className="login-header">
            <h3>Forgot Password?</h3>
            <p className="small text-muted">Enter your email to get a password reset link</p>
          </div>

            <Input label="Email" name="email" type="text" formik={formik} />
            <div className="text-right">
              <a className="forgot-link" href={ROUTES.login}>Remember your password?</a>
            </div>
            <button 
              disabled={formik.isSubmitting}
              className="btn btn-primary btn-block btn-lg login-btn" 
              type="submit">
                Reset Password
            </button>
        </form>
      )  
}


function ForgetPasswordPage() {
    return (
        // <AuthLayout label={undefined}>
        <Form />
    //  </AuthLayout>
    )
}

export default ForgetPasswordPage
