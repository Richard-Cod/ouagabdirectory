import { useNavigate } from "react-router-dom";
import { selectLoginPageVM } from "app/redux/features/vms";
import { useAppSelector } from "app/redux/hooks";

import { Formik, useFormik } from "formik";
import Input from "app/components/Input";
import {Link} from "react-router-dom"
import appConstants, { ROUTES } from "constants/constants";
import { selectUser } from "app/redux/features/userSlice";
import AppFormikInput from "app/components/AppFormikInput";

import BF from "app/bf2.jpg"
import AuthLayout from "app/components/AuthLayout";

// function Form({label} : {label : string}) {
//   const navigate = useNavigate();
//   const loginPageVM = useAppSelector(selectLoginPageVM)

  
//     const formik = useFormik({
//         initialValues: loginPageVM.initialValues,
//         validationSchema: loginPageVM.userSchema,
//         onSubmit: async (values) => {
//           const {email,password} =values
//           await loginPageVM.login({email , password})
//         },
//       });
   
//       return (
//         <form onSubmit={formik.handleSubmit}>
//             <Input label="Email" name="email" formik={formik} />
//             <Input label="Password" name="password" type="password" formik={formik} />

//             <div className="text-right">
//                 <Link className="forgot-link" to={ROUTES.forgetPassword}>Forgot Password ?</Link>
//             </div>
//             <button 
//                 disabled={formik.isSubmitting}
//                 className="btn btn-primary btn-block btn-lg login-btn" type="submit">
//                 {label}
//             </button>
                 
//         </form>
//       )  
// }
const t = "https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"


function LoginPage() {
  const navigate = useNavigate();
  const loginPageVM = useAppSelector(selectLoginPageVM)



  const formik = useFormik({
    initialValues: loginPageVM.initialValues,
    validationSchema: loginPageVM.userSchema,
    onSubmit: values => {
      const {email , password} = values
      loginPageVM.login({email , password})

    },
  });

  const formInputs = [
    {
      label:"Email",
      name:"email",
      text:"email"
    },
    {
      label:"Mot de passe",
      name:"password",
      text:"password"
    },
  ]


    return (
        <AuthLayout>
         <form 
            onSubmit={formik.handleSubmit} 
            className="mt-8 grid grid-cols-6 gap-6">
            {formInputs.map((v) => {
              return <AppFormikInput 
              label={v.label}
              formik={formik}
              name={v.name}
              type={v.text || "text"}
              containerClasses={`col-span-6 ${v.name !=="email" && "sm:col-span-3" }`}
              />
            })}
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button 
                disabled={formik.isSubmitting}
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                type="submit">
               Se connecter
            </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                <span>Pas de compte ? </span>
                <span onClick={() => navigate(ROUTES.auth)} className="text-gray-700 underline cursor-pointer">S'inscrire</span>.

              </p>
            </div>
          </form>
        </AuthLayout>
        
    )
}

export default LoginPage