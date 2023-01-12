import { useNavigate } from "react-router-dom";
import {  selectRegisterPageVM } from "app/redux/features/vms";
import { useAppSelector } from "app/redux/hooks";

import {  useFormik } from "formik";
import { ROUTES } from "app/../constants/constants";
import AuthLayout from "app/components/AuthLayout";
import { AtSymbolIcon, HeartIcon } from "@heroicons/react/24/solid";
import buildFormikForm, { FormikFormInput } from "app/components/BuildFormikForm";
import LottieCmp from "app/components/LottieCmp";

import redloading from "app/animations/redloading.json"


function BottomPart({formik} : {formik : any}){
  const navigate = useNavigate();

  return <>
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
</>

}
function RegisterPage() {
  const registerPageVM = useAppSelector(selectRegisterPageVM)

  const formik = useFormik({
      initialValues: registerPageVM.initialValues,
      validationSchema: registerPageVM.userSchema,
      onSubmit: async (values) => {
        const {email,password,first_name,last_name} =values
        await registerPageVM.register({email , password , first_name,last_name})
      },
    });

  const inputs : FormikFormInput[] = [
    {
      label:"Prénom",
      name:"first_name",
    },
    {
      label:"Nom",
      name:"last_name",
    },
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
    {
      label:"Retapez le mot de passe",
      name:"repassword",
      type:"password"
    }
  ]

  return (
    <AuthLayout>
        {formik.isSubmitting && <div className=" text-center">
          <LottieCmp 
            animationData={redloading}
            classNames="w-[250px] h-[250px] mt-10   mx-auto"
          />
          <p className="text-sm">inscription en cours ...</p>
        </div>
         }

       { !formik.isSubmitting && <form 
          onSubmit={formik.handleSubmit} 
          className="mt-8 grid grid-cols-6 gap-6">
            {buildFormikForm({inputs,formik})}
            <BottomPart formik={formik} />
        </form>}
    </AuthLayout>
  )
}

export default RegisterPage