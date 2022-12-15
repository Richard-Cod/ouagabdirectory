import React from 'react'

function AppFormikInput({formik,label,name,type,containerClasses, ...rest} : {formik : any ,label : string ,name : string ,type : string ,containerClasses :string,[rest:string]:any }) {
  return (
    <div className={containerClasses}>
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
        pl-2
        h-9
        border-[1px]
        rounded-md 
        border-gray-200 bg-white text-sm text-gray-700
        shadow-sm" />
        {formik.touched[name] && formik.errors[name] ? (
            <div className="p-2 bg-red-100 text-red-900 text-xs font-semibold" role="alert">
                 {formik.errors[name]}
            </div>
            
          ) : null}
    </div>
  )
}

export default AppFormikInput