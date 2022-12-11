import { showPrice } from "logic/helper/showPrice"
import AppSlider from "./AppSlider"

import { HeartIcon  } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"



import { Society } from "logic/models/Society"
import { useAppDispatch, useAppSelector } from "app/redux/hooks"
import { isSocietyLiked, likeOrDislikeSociety, selectLikedSocietiesIds, selectSocieties } from "app/redux/features/homepageSlice"
import { formatImageFromBackend } from "logic/helper/getImageFromBackend"
import { Link } from "react-router-dom"
import { ROUTES } from "constants/constants"
import HeartItem from "./HeartItem"



function ItemCard({society} : {society : Society}) {
  const dispatch = useAppDispatch()

  
  const sr = "https://palmares.lemondeduchiffre.fr/images/joomlart/demo/default.jpg"

  return (
      // <Link to={ROUTES.toSocietyDetails(society.name)}>
        <div className='space-y-1 relative hover:bg-gray-50 cursor-pointer rounded-2xl'>
        {(!society.images || society.images.length === 0) && <AppSlider>
          <img src={sr}  className=" w-full mx-auto rounded-2xl mb-3 " />
        </AppSlider>}

          {society.images && <AppSlider>
            {society.images.map((v) => <img src={formatImageFromBackend(v)}  className="h-96 w-full mx-auto rounded-2xl mb-3 " />)}
          </AppSlider>}

          <div className="absolute top-2 right-8 cursor-pointer"><HeartItem societyId={society.id} classNames="w-7 h-7"/></div>
          {/* <OutlineHeartIcon className={`h-8 w-8 mx-auto absolute top-2 right-8 text-red-900   `} /> */}
          <p className='font-semibold'> {society.name} </p>
          <p className='text-sm text-gray-600'>{society.category.title}</p>
          <p className='text-sm text-gray-600'> {society.bio} </p>
          <p className='text-sm font-semibold'> {showPrice(society.price_range)} </p>
      </div>
    // </Link>
  )
}

export default ItemCard