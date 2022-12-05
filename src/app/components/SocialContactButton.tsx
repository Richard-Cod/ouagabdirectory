import React from 'react'
// `tel:${society.phoneNumber}`
function SocialContactButton({href,logoSrc ,label,classes ,Icon} : {href:string , logoSrc:any,label:string,classes:string,Icon:any}) {
  return (
    <div>
        <a
        className={`inline-flex items-center rounded border  px-2 py-3 text-white  hover:text-gray-100 focus:outline-none ${classes}  `}
        href={href}>
        {!Icon && <img src={logoSrc} className="h-4 w-4 text-white mr-2" />}
        {Icon && <Icon className="h-4 w-4 text-white mr-2" />}
        <span className="text-sm font-medium"> {label} </span>
      </a>
   </div>

  )
}
SocialContactButton.defaultProps = {
    Icon:null
}

export default SocialContactButton