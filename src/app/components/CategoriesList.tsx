

import { Category } from "logic/models/Category";
import { useState } from "react";

import foodlogo from 'app/foodlogo.svg'
const src = foodlogo
// const src ="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"
// active:text-[11px]

function CategoryItem({selected,setSelectedCategory,category} : {selected:boolean,setSelectedCategory : any,category:any}) {
  return (
      <button onClick={() => {setSelectedCategory(category)}} 
      className={`biz text-[12px] group text-center pb-3 cursor-pointer  ${selected ? "border-b-2 border-black" : "hover:border-b-2 hover:border-[#EEEEEE] "}  `}>

        <div className="duration-300">
          <img src={src} className="h-6 w-6 mx-auto   " />
          <p className={`mt-2 whitespace-nowrap font-semibold  group-hover:text-black text-[#707171] ${selected && "text-black"}`}> Nourriture </p>
        </div>

      </button>
  )
}
CategoryItem.defaultProps = {
  selected : false
}
// function MySlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="border-2">
//     <Slider {...settings}>
//       {[1,2,3,4].map((v) => {
//         return <CategoryItem />
//       })}
//     </Slider>
//   </div>
//   )
// }



function CategoriesList() {
  const [selectedCategory, setselectedCategory] = useState<any>(0)

  return (
    <div className="flex space-x-4 overflow-x-scroll noscrollbar">
    {[0,1,2,3,4,5].map((v,i) => {
      return <CategoryItem category={v} setSelectedCategory={setselectedCategory} selected={v === selectedCategory} />
    })}
  </div>
  )
}

export default CategoriesList