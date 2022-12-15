import React, { useEffect } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon , MagnifyingGlassIcon , UserCircleIcon  } from '@heroicons/react/24/outline'
import onUserScrollTopOrEnd from 'logic/helper/onUserScrollTopOrEnd'
import appConstants, { ROUTES } from 'constants/constants'
import { useNavigate } from 'react-router-dom'

const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"


function MenuItem({label,selected,Icon,href} : {label : string,selected : boolean,Icon:any,href:string}) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(href) } className='text-center  p-2 cursor-pointer'>
          <Icon style={{strokeWidth: 2.5}} className={`h-6 w-6 mx-auto  ${selected ? "text-red-600" : "text-[#a7a6a7] "}`} />
          <p className={`mt-2 font-medium text-xs ${selected ? "text-black" : "text-[#a7a6a7] "}`}>{label}</p>
    </div>
  )
}

MenuItem.defaultProps = {
  selected : false
}

function Footer({selectedMenuItem,setSelectedMenuItem} : {selectedMenuItem:number,setSelectedMenuItem:any}) {
  
  const  MENUS = [
    {
      icon : MagnifyingGlassIcon,
      label: "Explorer",
      href: ROUTES.home
    },
    {
      icon : OutlineHeartIcon,
      label: "Favoris",
      href: ROUTES.favorite
    },
    {
      icon : UserCircleIcon,
      label: "Connexion",
      href: ROUTES.auth
    }
    
  ]

  const footerID = appConstants.appfooterId
  
  
  // get the element to hide/show
  const el = document.getElementById(footerID);


  // listen for scroll events
  onUserScrollTopOrEnd(
    () => {
      el?.classList.remove('appFadeIn')
      el?.classList.add('appFadeOut')
    },
    () => {
      el?.classList.remove('appFadeOut')
      el?.classList.add('appFadeIn')
    })




  // window.location.pathname 

  return (
    <footer
    id={footerID}
     className='h-18 w-full fixed bottom-0 border-t-2 flex justify-center space-x-8 bg-white z-50
      '>
      {MENUS.map((v) => {
        return  <MenuItem 
        Icon={v.icon} 
        label={v.label} 
        selected={window.location.pathname === v.href}
        href={v.href} />
      })}
    </footer>
  )
}

export default Footer