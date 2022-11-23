import { showPrice } from "logic/helper/showPrice"
import AppSlider from "./AppSlider"

import { HeartIcon  } from '@heroicons/react/24/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline'
import { useState } from "react"


import src from 'app/image1.jpg'
import src1 from 'app/image2.jpg'
import src2 from 'app/image3.jpg'
import src3 from 'app/image4.jpg'


const HeartItem = ({liked} : {liked : boolean}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? "red" : "#7F7F7F"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
}

function ItemCard() {
  const [liked, setliked] = useState(false)
  const handleLike = () => {
    setliked(!liked)

  }
  return (
    <div className='space-y-1 relative'>

        <AppSlider>
          <img style={{objectFit:"fill"}} src={src} className="h-96 w-full mx-auto rounded-2xl mb-3 border-2 " />
          <img src={src1} className="h-96 w-full mx-auto rounded-2xl mb-3 " />
          <img src={src2} className="h-96 w-full mx-auto rounded-2xl mb-3 " />
          <img src={src3} className="h-96 w-full mx-auto rounded-2xl mb-3 " />
        </AppSlider>

        <div onClick={() => handleLike()} className="absolute top-2 right-8 cursor-pointer"><HeartItem liked={liked} /></div>
        
        {/* <OutlineHeartIcon className={`h-8 w-8 mx-auto absolute top-2 right-8 text-red-900   `} /> */}
        <p className='font-semibold'> Ima'a , ouagadougou</p>
        <p className='text-sm text-gray-600'>Mode et création</p>
        <p className='text-sm text-gray-600'>Hand made ✨ Bags and accessories 🌹 || Wax_Bogolan_kôkô Donda_Faso Danfani || Shipping worldwide 🌍 From Burkina 🇧🇫 || 📞 +22676274313</p>
        <p className='text-sm font-semibold'> {showPrice("8000 - 95000")} </p>
      
    </div>
  )
}

export default ItemCard