import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon , MagnifyingGlassIcon , UserCircleIcon  } from '@heroicons/react/24/outline'

const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"


function MenuItem({label,selected,Icon} : {label : string,selected : boolean,Icon:any}) {
  return (
    <div className='text-center  p-2'>
          <Icon className={`h-8 w-8 mx-auto  ${selected ? "text-red-600" : "text-[#a7a6a7] "}`} />
          <p className={`mt-2 font-semibold text-xs ${selected ? "text-black" : "text-[#a7a6a7] "}`}>{label}</p>
    </div>
  )
}

MenuItem.defaultProps = {
  selected : false
}

function Footer() {
  return (
    <div className='h-20 w-full sticky bottom-0 border-t-2 flex justify-center space-x-8 bg-white z-50'>
      <MenuItem Icon={MagnifyingGlassIcon} label='Explorer' selected />
      <MenuItem Icon={OutlineHeartIcon} label='Favoris' />
      <MenuItem Icon={UserCircleIcon} label='Connexion'/>
    </div>
  )
}

export default Footer