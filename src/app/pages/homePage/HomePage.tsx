import CategoriesList from "app/components/CategoriesList"
import FilterButton from "app/components/FilterButton"
import Footer from "app/components/Footer"
import ItemCardList from "app/components/ItemCardList"
import Navbar from "app/components/Navbar"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between  pl-4 pr-10">
        <CategoriesList />
        <FilterButton />
      </div>
      <ItemCardList />
      <Footer />
    </div>
  )
}

export default HomePage