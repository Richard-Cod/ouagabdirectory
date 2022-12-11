import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import AppBottomDrawer from './AppBottomDrawer'

function ShareSocietyComp({iconsClasses} : {iconsClasses:string}) {
  return (
    <AppBottomDrawer 
        ButtonComp={<ArrowUpTrayIcon className={iconsClasses}/>} 
        Content={<div> 
              <p>Partager avec vos amis</p>
            </div>}
        />
  )
}

export default ShareSocietyComp