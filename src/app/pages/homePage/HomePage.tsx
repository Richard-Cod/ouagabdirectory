import CategoriesList from "app/components/CategoriesList"
import FilterButton from "app/components/FilterButton"
import Footer from "app/components/Footer"
import ItemCardList from "app/components/ItemCardList"
import Navbar from "app/components/Navbar"
import { selectCategories, selectSocieties } from "app/redux/features/homepageSlice"
import { selectHomePageVM } from "app/redux/features/vms"
import { useAppSelector } from "app/redux/hooks"
import { useEffect, useRef, useState } from "react"

function HomePage() {
  // const categories = useAppSelector(selectCategories)
  const societies = useAppSelector(selectSocieties)

  const [selectedFooterMenuItem, setselectedFooterMenuItem] = useState(1)


  


  const  EXPLORE = <div className="sm:hidden">
    <Navbar />
    <div className="flex justify-between  pl-4 pr-10">
      <CategoriesList />
      <FilterButton />
    </div>
    {societies && <ItemCardList societies={societies} />}
  </div>

  const FAVORIS = <div> 
    <h1>Favoris</h1>
    <p>Connectez-vous pour consulter vos favoris</p>
  </div>

  const AUTHPAGE = <div>
    <p>Connexion inscription</p>
  </div>



  

  return (
    <div 
    id="rrr"
    >
      <div style={{flex: ""}} className="">
      {selectedFooterMenuItem === 1 && EXPLORE }
      {selectedFooterMenuItem === 2 && FAVORIS}
      {selectedFooterMenuItem === 3 && AUTHPAGE}

    </div>
      <Footer selectedMenuItem={selectedFooterMenuItem} setSelectedMenuItem={setselectedFooterMenuItem} />
    </div>
  )
}

export default HomePage