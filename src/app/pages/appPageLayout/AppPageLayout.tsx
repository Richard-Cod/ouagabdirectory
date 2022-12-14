import AuthLayout from "app/components/AuthLayout"
import CategoriesList from "app/components/CategoriesList"
import FilterButton from "app/components/FilterButton"
import Footer from "app/components/Footer"
import ItemCardList from "app/components/ItemCardList"
import Navbar from "app/components/Navbar"
import { selectCategories, selectSocieties } from "app/redux/features/homepageSlice"
import { selectHomePageVM } from "app/redux/features/vms"
import { useAppSelector } from "app/redux/hooks"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { LoginPage, RegisterPage } from "../authPages"
import ExplorePage from "../explore/ExplorePage"

function AppPageLayout({children} : {children:any}) {
  return (
    <div className="sm:hidden pb-20">
      {children}
      <Footer />
    </div>
    
  )
}


export default AppPageLayout