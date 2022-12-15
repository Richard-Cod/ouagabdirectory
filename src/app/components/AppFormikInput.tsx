import React from 'react'

function AppFormikInput({formik,label,name,type, ...rest} : {formik : any ,label : any ,name : any ,type : any ,[rest:string]:any }) {
  return (
    <div className="col-span-6 sm:col-span-3">
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input 
         name={name}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values[name]}
         type={type}

        className="mt-1 w-full 
        rounded-md 
        border-gray-200 bg-white text-sm text-gray-700
        shadow-sm" />
        {formik.touched[name] && formik.errors[name] ? (
            <div className="alert alert-danger" role="alert">
                 {formik.errors[name]}
            </div>
            
          ) : null}
    </div>
  )
}

export default AppFormikInput