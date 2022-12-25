import { EyeIcon, HeartIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function AppFormikInput({formik,label,name,type,containerClasses,handleClickIcon,TrailIcon,showPasswordIcon, ...rest} : {
  formik : any ,label : string ,name : string ,
  type : string ,containerClasses :string,
  handleClickIcon?:any,
  TrailIcon?:any,
  showPasswordIcon?:boolean,
  [rest:string]:any 
}) {
  const [currentType, setcurrentType] = useState(type)

  return (
    <div className={containerClasses+ " relative"}>
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        
        <div className='flex items-center h-9
          border-[1px]
          rounded-md
          border-gray-200 bg-white text-sm text-gray-700
          shadow-sm pl-2 pr-3'>
          <input 
          autoComplete='off'
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          type={currentType}

          className="
          mt-1 w-full 
          border-none
          outline-none
          " />

          {showPasswordIcon && <EyeIcon 
          onClick={() => {
              setcurrentType(currentType ==="password"? "text" : "password")
          }}
        className='h-4 w-4 cursor-pointer ' />}

          {!showPasswordIcon && TrailIcon && <TrailIcon 
            onClick={() => {
            }}
            className='h-4 w-4 cursor-pointer ' />} 
        
          
        </div>


        {formik.touched[name] && formik.errors[name] ? (
            <div className="p-2 bg-red-100 text-red-900 text-xs font-semibold" role="alert">
                 {formik.errors[name]}
            </div>
            
          ) : null}
    </div>
  )
}
AppFormikInput.defaultProps = {
  onIconClicked:null,
}

export default AppFormikInput