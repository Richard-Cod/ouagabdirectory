import React, { useEffect } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon , MagnifyingGlassIcon , UserCircleIcon  } from '@heroicons/react/24/outline'

const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"


function MenuItem({label,selected,Icon} : {label : string,selected : boolean,Icon:any}) {
  return (
    <div className='text-center  p-2 cursor-pointer'>
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
      id : 1,
      icon : MagnifyingGlassIcon,
      label: "Explorer",
    },
    {
      id : 2,
      icon : OutlineHeartIcon,
      label: "Favoris",
    },
    {
      id : 3,
      icon : UserCircleIcon,
      label: "Connexion",
    }
    
  ]

  const footerID = "appfooterId"
  
  // get the element to hide/show
  const el = document.getElementById(footerID);
  // get the current scroll position
  let previousScrollPosition = window.pageYOffset;


  console.clear()
  // listen for scroll events
  window.addEventListener("scroll", function (event:any) {


    // get the current scroll position
    let currentScrollPosition = window.scrollY;

    // check if the user is scrolling up or down
    if (currentScrollPosition > previousScrollPosition) {
      // the user is scrolling down, show the element
      // element.style.display = 'block';
      el?.classList.remove('appFadeIn')
      el?.classList.add('appFadeOut')
      console.log("sccroll down")
    } else {
      // the user is scrolling up, hide the element
      // element.style.display = 'none';
      console.log("sccroll up")
      el?.classList.remove('appFadeOut')
      el?.classList.add('appFadeIn')

    }

    // update the previous scroll position
    previousScrollPosition = currentScrollPosition;

        
});




  return (
    <div
    id={footerID}
     className='h-18 w-full fixed bottom-0 border-t-2 flex justify-center space-x-8 bg-white z-50
      '>
      {MENUS.map((v) => {
        return <span  onClick={() => setSelectedMenuItem(v.id)}>
          <MenuItem Icon={v.icon} label={v.label} selected={selectedMenuItem === v.id} />
        </span>
      })}
    </div>
  )
}

export default Footer