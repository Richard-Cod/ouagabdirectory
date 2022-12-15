import { useNavigate } from "react-router-dom";
import { selectLoginPageVM, selectRegisterPageVM } from "app/redux/features/vms";
import { useAppSelector } from "app/redux/hooks";

import {  useFormik } from "formik";
import Input from "app/components/Input";
import {Link} from "react-router-dom"
import { ROUTES } from "app/../constants/constants";
import AuthLayout from "app/components/AuthLayout";
import AppFormikInput from "app/components/AppFormikInput";
import { selectUser } from "app/redux/features/userSlice";

function RegisterPage() {
  const user = useAppSelector(selectUser)
  const label = "login"
  const loginPageVM = useAppSelector(selectLoginPageVM)

  const navigate = useNavigate();


  const formik = useFormik({
      initialValues: loginPageVM.initialValues,
      validationSchema: loginPageVM.userSchema,
      onSubmit: async (values) => {
        const {email,password} =values
        await loginPageVM.login({email , password})
      },
    });

  const formInputs = [
    {
      label:"Prénom",
      name:"firstname",
    },
    {
      label:"Nom",
      name:"lastname",
    },
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
    {
      label:"Retapez le mot de passe",
      name:"repassword",
      text:"repassword"
    }
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
             
  
      
                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm" />
                    <span className="text-sm text-gray-700">
                    Je souhaite recevoir des courriels sur les événements, les mises à jour de produits et les annonces de l'entreprise
                    </span>
                  </label>
                </div>
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    <span>En créant un compte, vous acceptez nos </span>
                    <a href="#" className="text-gray-700 underline">
                     conditions générales 
                    </a>
                    <span> et notre </span>
                    <a href="#" className="text-gray-700 underline">
                    politique de confidentialité </a>.
                  </p>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button 
                    disabled={formik.isSubmitting}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="submit">
                    Créer un compte
                </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    <span>Vous avez déja un compte ? </span>
                    <span onClick={() => navigate(ROUTES.toLoginFromAuth)} className="text-gray-700 underline cursor-pointer">Se connecter</span>.
                  </p>
                </div>
        </form>
    </AuthLayout>
  )
}

export default RegisterPage