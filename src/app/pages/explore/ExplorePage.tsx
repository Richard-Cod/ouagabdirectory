import CategoriesList from 'app/components/CategoriesList'
import FilterButton from 'app/components/FilterButton'
import ItemCardList from 'app/components/ItemCardList'
import Navbar from 'app/components/Navbar'
import { selectSocieties } from 'app/redux/features/homepageSlice'
import { useAppSelector } from 'app/redux/hooks'
import React from 'react'
import AppPageLayout from '../appPageLayout/AppPageLayout'

function ExplorePage() {
  const societies = useAppSelector(selectSocieties)

  return (
    <AppPageLayout>
        <Navbar />
        <div className="flex justify-between  pl-4 pr-10">
          <CategoriesList />
          <FilterButton />
        </div>
        {societies && <ItemCardList societies={societies} />}
      
    </AppPageLayout>
  )
}

export default ExplorePage