import { showPrice } from "logic/helper/showPrice"
import AppSlider from "./AppSlider"

import { HeartIcon  } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"



import { Society } from "logic/models/Post"
import { useAppDispatch, useAppSelector } from "app/redux/hooks"
import { isSocietyLiked, likeOrDislikeSociety, selectLikedSocietiesIds, selectSocieties } from "app/redux/features/homepageSlice"
import { formatImageFromBackend } from "logic/helper/getImageFromBackend"


const HeartItem = ({liked} : {liked : boolean}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? "red" : "#7F7F7F"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
}

function ItemCard({society} : {society : Society}) {
  const dispatch = useAppDispatch()

  const societiesLikedIds = useAppSelector(selectLikedSocietiesIds)
  const liked = isSocietyLiked(societiesLikedIds,society.id)
  // const [liked, setliked] = useState(isSocietyLiked(societiesLikedIds,society.id))

  const handleLike = () => {
    dispatch(likeOrDislikeSociety({societyId : society.id}))
    // setliked(!liked)
  }
  const sr = "https://palmares.lemondeduchiffre.fr/images/joomlart/demo/default.jpg"

  return (
    <div className='space-y-1 relative'>
      {(!society.images || society.images.length === 0) && <AppSlider>
        <img src={sr}  className=" w-full mx-auto rounded-2xl mb-3 " />
      </AppSlider>}

        {society.images && <AppSlider>
          {society.images.map((v) => <img src={formatImageFromBackend(v)}  className="h-96 w-full mx-auto rounded-2xl mb-3 " />)}
        </AppSlider>}

        <div onClick={() => handleLike()} className="absolute top-2 right-8 cursor-pointer"><HeartItem liked={liked} /></div>
        {/* <OutlineHeartIcon className={`h-8 w-8 mx-auto absolute top-2 right-8 text-red-900   `} /> */}
        <p className='font-semibold'> {society.name} </p>
        <p className='text-sm text-gray-600'>{society.category.title}</p>
        <p className='text-sm text-gray-600'> {society.bio} </p>
        <p className='text-sm font-semibold'> {showPrice(society.price_range)} </p>
    </div>
  )
}

export default ItemCard