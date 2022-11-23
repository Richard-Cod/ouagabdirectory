import { useNavigate } from "react-router-dom";
import { selectRegisterPageVM } from "app/redux/features/vms";
import { useAppSelector } from "app/redux/hooks";

import {  useFormik } from "formik";
import Input from "app/components/Input";
import {Link} from "react-router-dom"
import { ROUTES } from "app/../constants/constants";



function Form({label} : {label : string}) {
  const navigate = useNavigate();
  const registerPageVM = useAppSelector(selectRegisterPageVM)


    const formik = useFormik({
        initialValues: registerPageVM.initialValues,
        validationSchema: registerPageVM.userSchema,
        onSubmit: values => {
          const {email , password} = values
          const first_name =""
          const last_name =""


          registerPageVM.register({email , password,first_name,last_name})
          // formik.setSubmitting(false)
        //   setTimeout(() => {
        //     navigate(routes.home);
        // }, 300);
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Email" name="email" formik={formik} />
            <Input label="Password" name="password" type="password" formik={formik} />
            <div>
              <div className="text-right">
                <Link className="forgot-link" to={ROUTES.login}>Already have an account?</Link>
              </div>
            </div>
            <button 
                disabled={formik.isSubmitting}
                className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                {label}
            </button>
        </form>
      )  
}

function RegisterPage() {

  const label = "Register"
    return (
         <div>
           <Form label={label} />
         </div>
        
    )
}

export default RegisterPage