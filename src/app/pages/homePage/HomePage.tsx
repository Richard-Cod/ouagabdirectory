import CategoriesList from "app/components/CategoriesList"
import FilterButton from "app/components/FilterButton"
import Footer from "app/components/Footer"
import ItemCardList from "app/components/ItemCardList"
import Navbar from "app/components/Navbar"
import { selectCategories, selectSocieties } from "app/redux/features/homepageSlice"
import { selectHomePageVM } from "app/redux/features/vms"
import { useAppSelector } from "app/redux/hooks"

function HomePage() {
  // const categories = useAppSelector(selectCategories)
  const societies = useAppSelector(selectSocieties)


  return (
    <div className="sm:hidden">
      <Navbar />
      <div className="flex justify-between  pl-4 pr-10">
        <CategoriesList />
        <FilterButton />
      </div>
      {societies && <ItemCardList societies={societies} />}
      <Footer />
    </div>
  )
}

export default HomePage