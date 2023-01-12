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
import { AtSymbolIcon, HeartIcon } from "@heroicons/react/24/solid";
import BuildFormikForm, { FormikFormBuilderProp, FormikFormInput } from "app/components/BuildFormikForm";
import buildFormikForm from "app/components/BuildFormikForm";
import LottieCmp from "app/components/LottieCmp";
import redloading from "app/animations/redloading.json"


const t = "https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"


function BottomPart({formik} : {formik:any}){
  const navigate = useNavigate();

  return <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
  <button 
      disabled={formik.isSubmitting}
      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 cursor-pointer"
      type="submit">
     Se connecter
  </button>

    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
      <span>Pas de compte ? </span>
      <span 
        onClick={() => navigate(ROUTES.auth)} 
        className="text-gray-700 underline cursor-pointer">
          S'inscrire
      </span>.
    </p>

  </div>
}

function LoginPage() {
  const loginPageVM = useAppSelector(selectLoginPageVM)

  const formik = useFormik({
    initialValues: loginPageVM.initialValues,
    validationSchema: loginPageVM.userSchema,
    onSubmit: async (values) => {
      const {email , password} = values
      await loginPageVM.login({email , password})
    },
  });

  const inputs : FormikFormInput[] = [
    {
      label:"Email",
      name:"email",
      type:"email",
      TrailIcon : AtSymbolIcon
    },
    {
      label:"Mot de passe",
      name:"password",
      type:"password"
    },
  ]
    return (
        <AuthLayout>
          {formik.isSubmitting && <div className=" text-center">
          <LottieCmp 
            animationData={redloading}
            classNames="w-[250px] h-[250px] mt-10   mx-auto"
          />
          <p className="text-sm">connexion en cours ...</p>
        </div>
         }

         {!formik.isSubmitting && <form 
            onSubmit={formik.handleSubmit} 
            className="mt-8 grid grid-cols-6 gap-6">
            {buildFormikForm({formik,inputs})}
            <BottomPart formik={formik} />
          </form>}
        </AuthLayout>
    )
}

export default LoginPage