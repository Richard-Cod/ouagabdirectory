import React from 'react'

function AppButton({label , ...rest} : {label : string,[rest:string]:any}) {
  return (
    <a
  className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  <span className="text-sm font-medium"> {label} </span>

</a>
  )
}

export default AppButton