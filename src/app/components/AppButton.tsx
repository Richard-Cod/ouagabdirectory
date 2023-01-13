import React from 'react'

function AppButton({label ,onClick,classNames, ...rest} : {label : string,onClick:any,classNames?:string,[rest:string]:any}) {
  return (
    <button
      onClick={onClick}
      className={`
      rounded 
      px-8 py-3
      focus:outline-none focus:ring
      active:text-gray-400
      w-full
      ${classNames}`}
    >
   {label} 
</button>
  )
}

export default AppButton