import React from 'react'

function AppInput({label,Icon , classes, ...rest} : {label : any , Icon : any ,classes : any, [rest:string]:any }) {
  return (
    <div className="relative">
        <input
          className={`w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm border-2 ${classes}`}
          {...rest}
        />

        <span className="absolute inset-y-0 right-4 inline-flex items-center">
          <Icon style={{strokeWidth : 2.5}} className="h-5 w-5 text-gray-400" />
        </span>
      </div>
  )
}

export default AppInput