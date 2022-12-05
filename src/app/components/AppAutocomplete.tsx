import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import AppInput from './AppInput'
import foodlogo from 'app/foodlogo.svg'

function AppAutocomplete({AutocompleteItems} : {AutocompleteItems:any}) {
  const [query, setquery] = useState("ma")
  return (
    <div className=''>
        <AppInput 
            label="Tapez votre recherche"
            classes="cursor-pointer"
            Icon={MagnifyingGlassIcon}
            placeholder="Rechercher"
            value={query}
            onChange={(e : any) => setquery(e.target.value)}
        />

        <div className=' space-y-2 pt-3'>
           <AutocompleteItems query={query} />
        </div>

  </div>
  )
}

export default AppAutocomplete