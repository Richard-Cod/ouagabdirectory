import { selectSocieties } from 'app/redux/features/homepageSlice'
import { useAppSelector } from 'app/redux/hooks'
import { formatImageFromBackend } from 'logic/helper/getImageFromBackend'
import { Society } from 'logic/models/Society'
import AppAutocomplete from './AppAutocomplete'

import {Link} from 'react-router-dom'
import { ROUTES } from 'constants/constants'

function SocietyAutocomplete() {
  const societies = useAppSelector(selectSocieties)

  const showItem = (society : Society) => {
    return <Link to={ROUTES.toSocietyDetails(society.name)} className="navbar-brand logo ">
    <div className='p-2 border-[1px] border-gray-200 flex items-center cursor-pointer hover:border-gray-400 duration-300 mb-2 '>
    <img className='h-8 w-8 mr-4' src={formatImageFromBackend(society.images[0]) } />
    <p className=''> {society.name} </p>
    </div>
  </Link>
    
    
  }


    const AutocompleteItems = ({query} : {query:string}) => {
        let val = query ?societies?.filter((value) => value.name.toLowerCase().indexOf(query.toLowerCase()) > - 1) : societies
        
        if(!val || val.length === 0) return <p>Aucun résultat</p>
        return val?.map((society) => showItem(society))
    }
    
  return <AppAutocomplete AutocompleteItems={AutocompleteItems} />
}

export default SocietyAutocomplete