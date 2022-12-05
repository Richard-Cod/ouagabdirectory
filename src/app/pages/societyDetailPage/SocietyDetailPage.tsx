import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid"
import AppButton from "app/components/AppButton"
import CategoriesList from "app/components/CategoriesList"
import FilterButton from "app/components/FilterButton"
import Footer from "app/components/Footer"
import ItemCardList from "app/components/ItemCardList"
import Navbar from "app/components/Navbar"
import { selectCategories, selectSocieties } from "app/redux/features/homepageSlice"
import { selectHomePageVM } from "app/redux/features/vms"
import { useAppSelector } from "app/redux/hooks"
import { formatImageFromBackend } from "logic/helper/getImageFromBackend"
import { showPrice } from "logic/helper/showPrice"
import { useParams } from "react-router-dom"

import whatsappLogo from 'app/whatsApp.png'
import facebook from 'app/facebook.svg'

function SocietyDetailPage() {
  // const categories = useAppSelector(selectCategories)
  let { societyName } = useParams();
  
  const societies = useAppSelector(selectSocieties)

  const society = societies?.find((society) => society.name === societyName )


  return (
    <div className="sm:hidden">
      {society && <div className="">
        <img className="h-[45vh] w-full" src={formatImageFromBackend(society.images[0])} />
        <div className="px-3">
          <h1 className="text-2xl mt-3"> {society.name} </h1>  
          <h1 className="text-gray-700 mt-4"> {society.bio} </h1>  
          <h1 className="text-gray-900 mt-4 ">Prix :  {showPrice(society.price_range)} </h1>  
          <hr className="my-4" />

          <div className="space-y-2">
           <div>
            <a
              className="inline-flex items-center rounded border border-red-600 bg-red-600 px-2 py-3 text-white  hover:text-gray-100 focus:outline-none  "
              href={`tel:${society.phoneNumber}`}>
              <PhoneArrowUpRightIcon className="h-5 w-5 text-white mr-4" />
              <span className="text-sm font-medium"> Appeler au {society.phoneNumber} </span>
            </a>
           </div>

           {/* <div>
            <a
                className="inline-flex items-center rounded border border-green-600 bg-green-600 px-2 py-3 text-white  hover:text-gray-100 focus:outline-none  "
                href={`tel:${society.phoneNumber}`}>
                <img src={whatsappLogo} className="h-4 w-4 text-white mr-2" />
                <span className="text-sm font-medium"> Contacter sur whatsapp </span>
              </a>
           </div> */}

          </div>

        </div>
      </div> }

      {!society && <p>Details not found</p>}
      
    </div>
  )
}

export default SocietyDetailPage