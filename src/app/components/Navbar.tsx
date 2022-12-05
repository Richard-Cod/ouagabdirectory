import React from 'react'
import AppInput from './AppInput'
import {  MagnifyingGlassIcon  } from '@heroicons/react/24/outline'
import AppModal from './AppModal'
import SocietyAutocomplete from './SocietyAutocomplete'

function Navbar() {
  

  const ModalLabelComp = (props : any) => {
    return <AppInput 
    label="Tapez votre recherche"
    classes="cursor-pointer"
    Icon={MagnifyingGlassIcon}
    placeholder="Rechercher"
    onClick={props.onClick}
  />
  }

  const modalContent = <div>
    <SocietyAutocomplete />
  </div>

  return (
    <div className='my-3'>
      <div className='px-4 cursor-pointer'>
        <AppModal 
          modalContent={modalContent} 
          ModalLabel={(onClick : any) => <ModalLabelComp onClick={onClick} /> }> 
        </AppModal>
      </div>
    </div>
  )
}

export default Navbar