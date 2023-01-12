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

  const modalContent = <div className=' h-80'>
    <SocietyAutocomplete />
  </div>

  return (
    <div className='my-3'>
      <div className='px-4 cursor-pointer'>
        <AppModal 
          className='bg-white p-6'
          modalContent={modalContent} 
          ModalLabel={(onClick : any) => <ModalLabelComp onClick={onClick} /> }> 
        </AppModal>
      </div>
    </div>
  )
}

export default Navbar