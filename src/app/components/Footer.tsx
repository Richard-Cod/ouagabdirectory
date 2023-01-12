import React, { useEffect, useRef } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon , MagnifyingGlassIcon , UserCircleIcon  } from '@heroicons/react/24/outline'
import onUserScrollTopOrEnd from 'logic/helper/onUserScrollTopOrEnd'
import appConstants, { ROUTES } from 'constants/constants'
import { useNavigate } from 'react-router-dom'
import { selectUser } from 'app/redux/features/userSlice'
import { useAppSelector } from 'app/redux/hooks'



const NAV_ITEMS = {
  explore : {
    icon : MagnifyingGlassIcon,
    label: "Explorer",
    href: ROUTES.home
  },
  favorite : {
    icon : OutlineHeartIcon,
    label: "Favoris",
    href: ROUTES.favorite
  },
  auth : {
    icon : UserCircleIcon,
    label: "Connexion",
    href: ROUTES.auth
  },
  profil : {
    icon : UserCircleIcon,
    label: "Profil",
    href: ROUTES.profile
  }
}


const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"


function MenuItem({label,selected,Icon,href} : {label : string,selected : boolean,Icon:any,href:string}) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(href) } className='text-center  p-2 cursor-pointer'>
          <Icon style={{strokeWidth: 2.5}} className={`h-6 w-6 mx-auto  ${selected ? "text-red-600" : "text-[#a7a6a7] "}`} />
          <p style={{fontSize : 10}} className={`mt-2 font-medium text-xs ${selected ? "text-black" : "text-[#a7a6a7] "}`}>{label}</p>
    </div>
  )
}

MenuItem.defaultProps = {
  selected : false
}

function Footer() {
  const user = useAppSelector(selectUser)
  
  const  MENUS = [
    NAV_ITEMS.explore,
    NAV_ITEMS.favorite,
  ]
  user ? MENUS.push(NAV_ITEMS.profil) : MENUS.push(NAV_ITEMS.auth)

  const footerID = appConstants.appfooterId
  const elementRef = useRef<HTMLElement|null>(null);

  useEffect(() => {

    if(elementRef.current){
      // listen for scroll events
      onUserScrollTopOrEnd(
        () => {
          elementRef.current?.classList.remove('appFadeIn')
          elementRef.current?.classList.add('appFadeOut')
        },
        () => {
          elementRef.current?.classList.remove('appFadeOut')
          elementRef.current?.classList.add('appFadeIn')
        })
    
  }
  }, [elementRef])
  



  // window.location.pathname 

  return (
    <footer
    ref={elementRef}
    id={footerID}
     className='w-full fixed bottom-0 border-t-2 flex justify-center space-x-8 bg-white z-50
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